import { promises as fs } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { execSync } from 'node:child_process'

type DemoTitles = {
  en?: string
  zh?: string
}

type DemoEntry = {
  name: string
  title: string
  titles: DemoTitles
  file: string
}

type ComponentEntry = {
  name: string
  docs: {
    en: string | null
    zh: string | null
  }
  demos: DemoEntry[]
}

type Args = {
  repo?: string
  out?: string
  lang?: string
  help?: boolean
}

function parseArgs(argv: string[]): Args {
  const args: Args = {}
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--repo') {
      args.repo = argv[i + 1]
      i += 1
      continue
    }
    if (arg === '--out') {
      args.out = argv[i + 1]
      i += 1
      continue
    }
    if (arg === '--help' || arg === '-h') {
      args.help = true
      continue
    }
    if (arg === '--lang') {
      args.lang = argv[i + 1]
      i += 1
      continue
    }
  }
  return args
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

async function listFiles(rootDir: string, ext: string): Promise<string[]> {
  const results: string[] = []
  async function walk(current: string) {
    const entries = await fs.readdir(current, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name)
      if (entry.isDirectory()) {
        await walk(fullPath)
        continue
      }
      if (entry.isFile() && entry.name.endsWith(ext)) {
        results.push(fullPath)
      }
    }
  }
  await walk(rootDir)
  return results
}

function formatDateISO(date: Date): string {
  return date.toISOString().slice(0, 10)
}

function normalizeLang(input?: string): 'en-US' | 'zh-CN' {
  if (!input) return 'en-US'
  const normalized = input.toLowerCase()
  if (normalized === 'zh' || normalized === 'zh-cn') return 'zh-CN'
  return 'en-US'
}

function normalizeDemoSrc(src: string): string {
  const cleaned = src.replace(/^[.][/]/, '').split('?')[0]
  return cleaned.replace(/\\/g, '/')
}

function extractDemoTags(markdown: string): Array<{ src: string; title: string }> {
  const matches: Array<{ src: string; title: string }> = []
  const regex = /<demo\b[^>]*\bsrc="([^"]+)"[^>]*>([\s\S]*?)<\/demo>/g
  let match: RegExpExecArray | null = null
  while ((match = regex.exec(markdown)) !== null) {
    matches.push({
      src: normalizeDemoSrc(match[1]),
      title: match[2].trim(),
    })
  }
  return matches
}

function rewriteDocs(markdown: string): string {
  let output = markdown
  output = output.replace(/<demo-group[^>]*>/g, '\n\n## Demos\n\n')
  output = output.replace(/<\/demo-group>/g, '\n')
  output = output.replace(
    /<demo\b[^>]*\bsrc="([^"]+)"[^>]*>([\s\S]*?)<\/demo>/g,
    (_match, rawSrc: string, rawTitle: string) => {
      const title = String(rawTitle || '').trim()
      const demoSrc = normalizeDemoSrc(String(rawSrc || ''))
      const demoMarkdown = demoSrc.replace(/\.vue$/, '.md')
      const label = title || path.posix.basename(demoMarkdown, '.md')
      return `- ${label}: ${demoMarkdown}`
    },
  )
  return output.trimEnd() + '\n'
}

function extractDocsBlocks(vueSource: string): Array<{ lang: string; content: string }> {
  const results: Array<{ lang: string; content: string }> = []
  const regex = /<docs\s+lang="([^"]+)"\s*>([\s\S]*?)<\/docs>/g
  let match: RegExpExecArray | null = null
  while ((match = regex.exec(vueSource)) !== null) {
    results.push({
      lang: match[1],
      content: match[2].trim(),
    })
  }
  return results
}

function stripDocsBlocks(vueSource: string): string {
  return vueSource.replace(/<docs\s+lang="[^"]+"\s*>[\s\S]*?<\/docs>\s*/g, '').trimStart()
}

function buildDemoMarkdown(
  title: string,
  vueSource: string,
  docBlocks: Array<{ lang: string; content: string }>,
  preferredLang: 'en-US' | 'zh-CN',
): string {
  const lines: string[] = []
  lines.push(`# ${title}`)
  lines.push('')
  const preferredBlocks = docBlocks.filter((block) => block.lang === preferredLang)
  const blocksToWrite = preferredBlocks.length > 0 ? preferredBlocks : []
  if (blocksToWrite.length > 0) {
    const block = blocksToWrite[0]
    lines.push(`## Description (${block.lang})`)
    lines.push('')
    lines.push(block.content)
    lines.push('')
  }
  lines.push('## Source')
  lines.push('')
  lines.push('```vue')
  lines.push(stripDocsBlocks(vueSource).trimEnd())
  lines.push('```')
  lines.push('')
  return lines.join('\n')
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help || !args.repo) {
    console.log('Usage: esno scripts/generate-antdv-next-skill.ts --repo <path> [--out <path>] [--lang en|zh]')
    process.exit(args.help ? 0 : 1)
  }

  const repoRoot = path.resolve(args.repo)
  const cwd = process.cwd()
  const outputRoot = path.resolve(args.out ?? 'skills/antdv-next')
  const referencesDir = path.join(outputRoot, 'references')
  const componentsOutDir = path.join(referencesDir, 'components')
  const preferredLang = normalizeLang(args.lang)

  const componentsRoot = path.join(repoRoot, 'playground', 'src', 'pages', 'components')
  if (!(await pathExists(componentsRoot))) {
    console.error(`Missing components directory: ${componentsRoot}`)
    process.exit(1)
  }

  await fs.rm(componentsOutDir, { recursive: true, force: true })
  await fs.mkdir(componentsOutDir, { recursive: true })
  await fs.rm(path.join(referencesDir, 'components-index.json'), { force: true })
  await fs.rm(path.join(referencesDir, 'components-index.md'), { force: true })

  const repoDisplayPath = (() => {
    const relative = toPosix(path.relative(cwd, repoRoot))
    if (!relative || relative.startsWith('..')) {
      return toPosix(repoRoot)
    }
    return relative
  })()

  const entries = await fs.readdir(componentsRoot, { withFileTypes: true })
  const componentDirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b))

  let gitSha: string | null = null
  try {
    gitSha = execSync('git rev-parse HEAD', { cwd: repoRoot, stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim()
  } catch {
    gitSha = null
  }

  const components: ComponentEntry[] = []

  for (const componentName of componentDirs) {
    const componentPath = path.join(componentsRoot, componentName)
    const enDocPath = path.join(componentPath, 'index.en-US.md')
    const zhDocPath = path.join(componentPath, 'index.zh-CN.md')
    const docPath = preferredLang === 'zh-CN' ? zhDocPath : enDocPath
    const demoDir = path.join(componentPath, 'demo')

    const hasEn = await pathExists(enDocPath)
    const hasZh = await pathExists(zhDocPath)
    const hasDoc = await pathExists(docPath)
    const hasDemoDir = await pathExists(demoDir)

    if (!hasDoc && !hasDemoDir) {
      continue
    }

    const docContent = hasDoc ? await fs.readFile(docPath, 'utf8') : ''
    const demoTags = docContent ? extractDemoTags(docContent) : []
    const demoTitlesMap = new Map<string, DemoTitles>()
    for (const tag of demoTags) {
      demoTitlesMap.set(tag.src, {
        [preferredLang === 'zh-CN' ? 'zh' : 'en']: tag.title,
      })
    }

    const demoOrder = demoTags.map((tag) => tag.src)

    const componentOutRoot = path.join(componentsOutDir, componentName)
    await fs.mkdir(componentOutRoot, { recursive: true })

    let enOut: string | null = null
    let zhOut: string | null = null

    if (hasDoc) {
      const rewritten = rewriteDocs(docContent)
      const outPath = path.join(
        componentOutRoot,
        preferredLang === 'zh-CN' ? 'index.zh-CN.md' : 'index.en-US.md',
      )
      await fs.writeFile(outPath, rewritten, 'utf8')
      if (preferredLang === 'zh-CN') {
        zhOut = toPosix(path.relative(referencesDir, outPath))
      } else {
        enOut = toPosix(path.relative(referencesDir, outPath))
      }
    }

    const demos: DemoEntry[] = []

    if (hasDemoDir) {
      const demoFiles = await listFiles(demoDir, '.vue')
      demoFiles.sort((a, b) => a.localeCompare(b))

      const remaining = new Set(demoFiles.map((file) => normalizeDemoSrc(toPosix(path.relative(componentPath, file)))))

      const ordered: string[] = []
      for (const demoSrc of demoOrder) {
        if (remaining.has(demoSrc)) {
          ordered.push(demoSrc)
          remaining.delete(demoSrc)
        }
      }

      const leftover = Array.from(remaining).sort((a, b) => a.localeCompare(b))
      ordered.push(...leftover)

      for (const demoSrc of ordered) {
        const demoFile = path.join(componentPath, demoSrc)
        if (!(await pathExists(demoFile))) continue
        const vueSource = await fs.readFile(demoFile, 'utf8')
        const docsBlocks = extractDocsBlocks(vueSource)
        const titles = demoTitlesMap.get(demoSrc) ?? {}
        const demoName = demoSrc.replace(/^demo\//, '').replace(/\.vue$/, '')
        const title = titles.en || titles.zh || demoName
        const demoOutPath = path.join(componentOutRoot, 'demo', `${demoName}.md`)
        await fs.mkdir(path.dirname(demoOutPath), { recursive: true })
        const demoMarkdown = buildDemoMarkdown(title, vueSource, docsBlocks, preferredLang)
        await fs.writeFile(demoOutPath, demoMarkdown, 'utf8')

        demos.push({
          name: demoName,
          title,
          titles,
          file: toPosix(path.relative(referencesDir, demoOutPath)),
        })
      }
    }

    components.push({
      name: componentName,
      docs: {
        en: enOut,
        zh: zhOut,
      },
      demos,
    })
  }

  const generatedAt = new Date()
  await fs.mkdir(referencesDir, { recursive: true })

  const generationPath = path.join(outputRoot, 'GENERATION.md')
  const generationLines = [
    '# Generation Info',
    '',
    `- Source: \`${repoDisplayPath}\``,
    `- Git SHA: \`${gitSha ?? 'unknown'}\``,
    `- Generated: ${formatDateISO(generatedAt)}`,
    `- Language: ${preferredLang}`,
    '',
  ]
  await fs.writeFile(generationPath, generationLines.join('\n'), 'utf8')

  const skillPath = path.join(outputRoot, 'SKILL.md')
  const skillLines: string[] = [
    '---',
    'name: antdv-next',
    'description: Antdv Next Vue 3 component library. Use when locating component API docs, props/events/slots, or playground demos.',
    'metadata:',
    '  author: Antdv Next team',
    `  version: \"${formatDateISO(generatedAt)}\"`,
    '  source: Generated from https://github.com/antdv-next/antdv-next, script located in this repo at scripts/generate-antdv-next-skill.ts',
    '---',
    '',
    '# Antdv Next',
    '',
    `> The skill is based on Antdv Next playground docs and demos, generated at ${formatDateISO(generatedAt)}.`,
    '',
    `Language: ${preferredLang}`,
    '',
    'Docs and demos are copied into `references/` for offline use.',
    '',
    '## Components',
    '',
    '| Component | Doc | Demos |',
    '| --- | --- | --- |',
  ]

  for (const component of components) {
    const docPath = component.docs.en ?? component.docs.zh ?? 'none'
    const demosPath = component.demos.length > 0 ? `components/${component.name}/demo/` : 'none'
    skillLines.push(`| ${component.name} | ${docPath} | ${demosPath} |`)
  }

  skillLines.push('')
  skillLines.push('## Generate / Update')
  skillLines.push('')
  skillLines.push('```bash')
  skillLines.push(`esno scripts/generate-antdv-next-skill.ts --repo repos/antdv-next --lang ${preferredLang === 'zh-CN' ? 'zh' : 'en'}`)
  skillLines.push('```')
  skillLines.push('')

  await fs.writeFile(skillPath, skillLines.join('\n'), 'utf8')

  console.log(`Generated ${components.length} components.`)
  console.log(`- ${toPosix(generationPath)}`)
  console.log(`- ${toPosix(skillPath)}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
