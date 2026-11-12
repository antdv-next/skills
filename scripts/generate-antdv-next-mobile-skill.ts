import { execSync } from 'node:child_process'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

/**
 * Generates `skills/antdv-next-mobile` from the docs and demos of
 * https://github.com/antdv-next/antdv-next-mobile (`docs/src/pages`).
 *
 * The output only depends on the source commit (no wall-clock dates), so running it twice
 * on the same commit produces no diff. That is what lets `scripts/sync.ts` run it unattended.
 */

type Lang = 'en-US' | 'zh-CN'

type Args = {
  repo?: string
  out?: string
  lang?: string
  help?: boolean
}

type DemoEntry = {
  name: string
  title: string
}

type ComponentEntry = {
  name: string
  title: string
  subtitle: string
  description: string
  group: string
  groupOrder: number
  demos: DemoEntry[]
}

type GuideEntry = {
  name: string
  title: string
  order: number
}

const PACKAGE_NAME = '@antdv-next/mobile'
const PACKAGE_DIR = 'packages/antdv-mobile'
const SITE = 'https://m.antdv-next.com'

function parseArgs(argv: string[]): Args {
  const args: Args = {}
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--repo') args.repo = argv[++i]
    else if (arg === '--out') args.out = argv[++i]
    else if (arg === '--lang') args.lang = argv[++i]
    else if (arg === '--help' || arg === '-h') args.help = true
  }
  return args
}

function normalizeLang(input?: string): Lang {
  const value = (input ?? 'en').toLowerCase()
  return value === 'zh' || value === 'zh-cn' || value === 'cn' ? 'zh-CN' : 'en-US'
}

function toPosix(targetPath: string): string {
  return targetPath.split(path.sep).join('/')
}

async function pathExists(targetPath: string): Promise<boolean> {
  try {
    await fs.access(targetPath)
    return true
  } catch {
    return false
  }
}

function git(repoRoot: string, command: string): string | null {
  try {
    return execSync(`git ${command}`, { cwd: repoRoot, stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim()
  } catch {
    return null
  }
}

function escapeTableCell(value: string): string {
  return value.replace(/\|/g, '\\|').replace(/\r?\n/g, ' ').trim()
}

function parseFrontmatter(markdown: string) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)
  const raw = match ? match[1] : ''
  const top = (key: string) => raw.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'))?.[1]?.trim() ?? ''
  const group = raw.match(/^group:[ \t]*\r?\n((?:[ \t]+.*\r?\n?)+)/m)?.[1] ?? ''
  const nested = (key: string) => group.match(new RegExp(`^[ \\t]+${key}:[ \\t]*(.*)$`, 'm'))?.[1]?.trim() ?? ''
  const unquote = (value: string) => value.replace(/^(['"])(.*)\1$/, '$2')
  return {
    length: match ? match[0].length : 0,
    title: unquote(top('title')),
    subtitle: unquote(top('subtitle')),
    description: unquote(top('description')),
    order: Number(top('order')) || 0,
    group: unquote(nested('title')),
    groupOrder: Number(nested('order')) || 99,
  }
}

function extractDemoTags(markdown: string): DemoEntry[] {
  const demos: DemoEntry[] = []
  const regex = /<demo\b[^>]*\bsrc="([^"]+)"[^>]*>([\s\S]*?)<\/demo>/g
  let match: RegExpExecArray | null = null
  while ((match = regex.exec(markdown)) !== null) {
    const name = path.posix.basename(match[1], '.vue')
    demos.push({ name, title: match[2].trim() || name })
  }
  return demos
}

/** `](/components/popup#props)` -> relative path of the copied doc. Only markdown link targets are touched. */
function rewriteInternalLinks(content: string, currentPath: string, referencesDir: string): string {
  const currentDir = path.dirname(currentPath)
  return content.replace(
    /\]\(\/(components|docs)\/([a-z0-9-]+?)(?:-cn)?(#[^)\s]*)?\)/g,
    (_match, kind: string, slug: string) => {
      const target = kind === 'components'
        ? path.join(referencesDir, 'components', slug, 'docs.md')
        : path.join(referencesDir, 'docs', `${slug}.md`)
      return `](${toPosix(path.relative(currentDir, target))})`
    },
  )
}

function rewriteDocs(markdown: string, currentPath: string, referencesDir: string): string {
  const meta = parseFrontmatter(markdown)
  const kept = [
    meta.title && `title: ${meta.title}`,
    meta.subtitle && `subtitle: ${meta.subtitle}`,
    meta.description && `description: ${meta.description}`,
  ].filter(Boolean)
  let output = `${['---', ...kept, '---', ''].join('\n')}\n${markdown.slice(meta.length).trimStart()}`

  // consecutive <demo> tags -> one table that points at the copied demo markdown
  output = output.replace(/(?:^[ \t]*<demo\b[^>]*>[\s\S]*?<\/demo>[ \t]*\r?\n?)+/gm, (block) => {
    const rows = extractDemoTags(block).map((demo) => `| ${escapeTableCell(demo.title)} | demo/${demo.name}.md |`)
    return `| Demo | Path |\n| --- | --- |\n${rows.join('\n')}\n`
  })
  output = output.replace(/^(#{1,6}[^\n{]+?)[ \t]*\{#[^}]+\}[ \t]*$/gm, '$1')
  output = rewriteInternalLinks(output, currentPath, referencesDir)
  output = output.replace(/\n{3,}/g, '\n\n')
  return `${output.trimEnd()}\n`
}

function extractDocsBlock(vueSource: string, lang: Lang): string {
  const regex = /<docs\s+lang="([^"]+)"\s*>([\s\S]*?)<\/docs>/g
  let match: RegExpExecArray | null = null
  while ((match = regex.exec(vueSource)) !== null) {
    if (match[1] === lang) return match[2].trim()
  }
  return ''
}

function stripDocsBlocks(vueSource: string): string {
  return vueSource.replace(/<docs\s+lang="[^"]+"\s*>[\s\S]*?<\/docs>\s*/g, '').trim()
}

function buildDemoMarkdown(title: string, source: string, language: string, description: string): string {
  const lines = [`# ${title}`, '']
  if (description) lines.push(description, '')
  lines.push('## Source', '', `\`\`\`${language}`, source, '```', '')
  return lines.join('\n')
}

function renderSkill(options: {
  lang: Lang
  version: string
  components: ComponentEntry[]
  guides: GuideEntry[]
}): string {
  const { lang, version, components, guides } = options
  const groups = new Map<string, ComponentEntry[]>()
  const sorted = [...components].sort((a, b) => a.groupOrder - b.groupOrder || a.name.localeCompare(b.name))
  for (const component of sorted) {
    const key = component.group || 'Others'
    groups.set(key, [...(groups.get(key) ?? []), component])
  }

  const lines: string[] = [
    '---',
    'name: antdv-next-mobile',
    `description: Antdv Next Mobile (${PACKAGE_NAME}) Vue 3 mobile UI component library with am-* components. Use when building mobile / H5 pages with it, or when locating component props/events/slots, demos, CSS variable theme tokens, or differences from the PC antdv-next API.`,
    'metadata:',
    '  author: Antdv Next team',
    `  version: "${version}"`,
    '  source: Generated from https://github.com/antdv-next/antdv-next-mobile, script located in this repo at scripts/generate-antdv-next-mobile-skill.ts',
    '---',
    '',
    '# Antdv Next Mobile',
    '',
    `> The skill is based on the docs and demos of \`${PACKAGE_NAME}@${version}\` (${SITE}).`,
    '',
    `Language: ${lang}`,
    '',
    'Docs and demos are copied into `references/` for offline use.',
    '',
    '## Essentials',
    '',
    `- Package: \`${PACKAGE_NAME}\` (Vue >= 3.5). This is **not** the PC library \`antdv-next\`; never mix their imports or tags.`,
    `- Full import: \`app.use(AntdvMobile)\` registers every component with the \`am-\` prefix (\`<am-button>\`). On demand: \`import { Button, message } from '${PACKAGE_NAME}'\`.`,
    '- Styles are loaded together with each component; there is no CSS file to import (see `references/docs/getting-started.md` for the SSR exception).',
    '- The API mirrors antdv-next: `v-model:open`, `v-model:value`, `items`, `options`, `fieldNames`, `size: \'small\' | \'middle\' | \'large\'`, `Modal.confirm`, `message.success` ... Every component doc ends with a "Differences from PC" section: read it before assuming PC behaviour.',
    '- Theming uses CSS variables only (`--am-*`), through `ConfigProvider` `theme` or plain CSS. Component tokens are listed under "Design Token" in each component doc.',
    '- Icons come from `@antdv-next/icons`.',
    '- Only use props, events and slots that appear in the component doc of this skill. Features that exist in this skill may be missing from an older installed version.',
    '',
    '## Guides',
    '',
    '| Guide | Path |',
    '| --- | --- |',
    ...guides.map((guide) => `| ${escapeTableCell(guide.title || guide.name)} | references/docs/${guide.name}.md |`),
    '',
    '## Components',
    '',
    'Each component has `docs.md` (when to use, API, design tokens, differences from PC) and a `demo/` folder with one markdown file per example.',
  ]

  for (const [group, items] of groups) {
    lines.push('', `### ${group}`, '', '| Component | Description | Doc | Demos |', '| --- | --- | --- | --- |')
    for (const item of items) {
      const label = item.subtitle ? `${item.title} ${item.subtitle}` : item.title || item.name
      lines.push(
        `| ${escapeTableCell(label)} | ${escapeTableCell(item.description)} | references/components/${item.name}/docs.md | ${
          item.demos.length ? `references/components/${item.name}/demo/ (${item.demos.length})` : 'none'
        } |`,
      )
    }
  }

  lines.push('')
  return lines.join('\n')
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help || !args.repo) {
    console.log('Usage: esno scripts/generate-antdv-next-mobile-skill.ts --repo <path> [--out <path>] [--lang en|zh]')
    process.exit(args.help ? 0 : 1)
  }

  const cwd = process.cwd()
  const repoRoot = path.resolve(args.repo)
  const outputRoot = path.resolve(args.out ?? 'skills/antdv-next-mobile')
  const referencesDir = path.join(outputRoot, 'references')
  const lang = normalizeLang(args.lang)
  const pagesRoot = path.join(repoRoot, 'docs', 'src', 'pages')
  const componentsRoot = path.join(pagesRoot, 'components')
  const guidesRoot = path.join(pagesRoot, 'docs')

  if (!(await pathExists(componentsRoot))) {
    throw new Error(`Unable to locate docs source pages: ${toPosix(componentsRoot)}`)
  }

  await fs.rm(referencesDir, { recursive: true, force: true })
  await fs.mkdir(path.join(referencesDir, 'components'), { recursive: true })
  await fs.mkdir(path.join(referencesDir, 'docs'), { recursive: true })

  /** `index.<lang>.md`, falling back to the Chinese source of truth. */
  const pickDoc = async (dir: string, base: string) => {
    for (const candidate of [`${base}.${lang}.md`, `${base}.zh-CN.md`]) {
      const file = path.join(dir, candidate)
      if (await pathExists(file)) return file
    }
    return null
  }

  const guides: GuideEntry[] = []
  if (await pathExists(guidesRoot)) {
    const names = new Set(
      (await fs.readdir(guidesRoot))
        .filter((file) => /\.(?:en-US|zh-CN)\.md$/.test(file))
        .map((file) => file.replace(/\.(?:en-US|zh-CN)\.md$/, '')),
    )
    for (const name of [...names].sort()) {
      const source = await pickDoc(guidesRoot, name)
      if (!source) continue
      const content = await fs.readFile(source, 'utf8')
      const outPath = path.join(referencesDir, 'docs', `${name}.md`)
      await fs.writeFile(outPath, rewriteDocs(content, outPath, referencesDir), 'utf8')
      const meta = parseFrontmatter(content)
      guides.push({ name, title: meta.title, order: meta.order })
    }
    guides.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name))
  }

  const components: ComponentEntry[] = []
  let demoCount = 0
  const componentDirs = (await fs.readdir(componentsRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b))

  for (const name of componentDirs) {
    const componentPath = path.join(componentsRoot, name)
    const docPath = await pickDoc(componentPath, 'index')
    if (!docPath) continue

    const docContent = await fs.readFile(docPath, 'utf8')
    const meta = parseFrontmatter(docContent)
    const outDir = path.join(referencesDir, 'components', name)
    const outDoc = path.join(outDir, 'docs.md')
    await fs.mkdir(outDir, { recursive: true })
    await fs.writeFile(outDoc, rewriteDocs(docContent, outDoc, referencesDir), 'utf8')

    const demoDir = path.join(componentPath, 'demo')
    const demos: DemoEntry[] = []
    if (await pathExists(demoDir)) {
      const titles = new Map(extractDemoTags(docContent).map((demo) => [demo.name, demo.title]))
      const files = (await fs.readdir(demoDir)).filter((file) => /\.(?:vue|ts)$/.test(file)).sort()
      // demos in the order of the doc, then helpers / unlisted files
      const order = [...titles.keys()]
      files.sort((a, b) => {
        const ia = order.indexOf(path.basename(a, '.vue'))
        const ib = order.indexOf(path.basename(b, '.vue'))
        return (ia < 0 ? order.length : ia) - (ib < 0 ? order.length : ib) || a.localeCompare(b)
      })
      await fs.mkdir(path.join(outDir, 'demo'), { recursive: true })
      for (const file of files) {
        const source = await fs.readFile(path.join(demoDir, file), 'utf8')
        const ext = path.extname(file)
        const base = path.basename(file, ext)
        const isVue = ext === '.vue'
        const title = isVue ? titles.get(base) ?? base : file
        const markdown = isVue
          ? buildDemoMarkdown(title, stripDocsBlocks(source), 'vue', extractDocsBlock(source, lang))
          : buildDemoMarkdown(title, source.trim(), 'ts', '')
        const outPath = path.join(outDir, 'demo', `${base}.md`)
        await fs.writeFile(outPath, rewriteInternalLinks(markdown, outPath, referencesDir), 'utf8')
        if (isVue) {
          demos.push({ name: base, title })
          demoCount += 1
        }
      }
    }

    components.push({
      name,
      title: meta.title || name,
      subtitle: meta.subtitle,
      description: meta.description,
      group: meta.group,
      groupOrder: meta.groupOrder,
      demos,
    })
  }

  if (components.length === 0) {
    throw new Error(`No component docs found in ${toPosix(componentsRoot)}`)
  }

  const packageJson = JSON.parse(await fs.readFile(path.join(repoRoot, PACKAGE_DIR, 'package.json'), 'utf8'))
  const version: string = packageJson.version
  const gitSha = git(repoRoot, 'rev-parse HEAD')
  const sourceDate = git(repoRoot, 'log -1 --format=%cs HEAD')
  const relativeRepo = toPosix(path.relative(cwd, repoRoot))
  const repoDisplayPath = !relativeRepo || relativeRepo.startsWith('..') ? toPosix(repoRoot) : relativeRepo

  await fs.writeFile(path.join(outputRoot, 'SKILL.md'), renderSkill({ lang, version, components, guides }), 'utf8')
  await fs.writeFile(
    path.join(outputRoot, 'GENERATION.md'),
    [
      '# Generation Info',
      '',
      `- Source: \`${repoDisplayPath}\``,
      `- Package: \`${PACKAGE_NAME}@${version}\``,
      `- Git SHA: \`${gitSha ?? 'unknown'}\``,
      `- Source Date: ${sourceDate ?? 'unknown'}`,
      `- Language: ${lang}`,
      '- Source Pages Root: `docs/src/pages`',
      `- Guides: ${guides.length}`,
      `- Components: ${components.length}`,
      `- Demos: ${demoCount}`,
      '',
    ].join('\n'),
    'utf8',
  )

  console.log(`antdv-next-mobile@${version}: ${components.length} components, ${demoCount} demos, ${guides.length} guides`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
