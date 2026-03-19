import { promises as fs } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { execSync } from 'node:child_process'
import ts from 'typescript'

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
  tokenFile: string | null
  tokenComponentKey: string | null
}

type SemanticEntry = {
  key: string
  component: string
  variant: string | null
  sourceDemo: string
  semantics: Record<string, any>
  leafCount: number
}

type SemanticArtifacts = {
  markdownFile: string | null
  jsonFile: string | null
  totalEntries: number
  totalComponents: number
  totalLeaves: number
  byComponent: Record<string, { keys: string[]; leafCount: number }>
}

type Args = {
  repo?: string
  out?: string
  lang?: string
  help?: boolean
}

type TokenSource = 'seed' | 'map' | 'alias'

type TokenMetaItem = {
  token: string
  type: string
  desc: string
  descEn: string
  name: string
  nameEn: string
  source: TokenSource
}

type TokenMetadata = {
  globalTokens: TokenMetaItem[]
  componentTokens: Record<string, TokenMetaItem[]>
}

type TokenArtifacts = {
  globalFile: string | null
  totalGlobalTokens: number
  totalComponentSets: number
  totalComponentTokens: number
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

function createTypeScriptProgram(packageRoot: string): ts.Program {
  const configPath = ts.findConfigFile(packageRoot, ts.sys.fileExists, 'tsconfig.json')
  if (!configPath) {
    throw new Error(`Unable to locate tsconfig.json under ${toPosix(packageRoot)}`)
  }

  const configFile = ts.readConfigFile(configPath, ts.sys.readFile)
  if (configFile.error) {
    throw new Error(ts.formatDiagnostic(configFile.error, {
      getCanonicalFileName: fileName => fileName,
      getCurrentDirectory: () => process.cwd(),
      getNewLine: () => '\n',
    }))
  }

  const parsed = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname(configPath),
  )

  return ts.createProgram({
    rootNames: parsed.fileNames,
    options: {
      ...parsed.options,
      noEmit: true,
      skipLibCheck: true,
    },
  })
}

function findInterfaceDeclaration(sourceFile: ts.SourceFile, name: string): ts.InterfaceDeclaration | null {
  let found: ts.InterfaceDeclaration | null = null

  function visit(node: ts.Node) {
    if (found) return
    if (ts.isInterfaceDeclaration(node) && node.name.text === name) {
      found = node
      return
    }
    node.forEachChild(visit)
  }

  visit(sourceFile)
  return found
}

function getJsDocTagText(symbol: ts.Symbol, tagName: string): string {
  const tag = symbol.getJsDocTags().find(item => item.name === tagName)
  if (!tag?.text) {
    return ''
  }
  if (typeof tag.text === 'string') {
    return tag.text.trim()
  }
  return tag.text
    .map(part => typeof part === 'string' ? part : part.text)
    .join('')
    .trim()
}

function shouldSkipTokenSymbol(symbol: ts.Symbol): boolean {
  const tagNames = new Set(symbol.getJsDocTags().map(tag => tag.name))
  return tagNames.has('internal') || tagNames.has('private') || tagNames.has('deprecated')
}

function getSymbolTypeText(checker: ts.TypeChecker, symbol: ts.Symbol, contextNode: ts.Node): string {
  const declaration = symbol.valueDeclaration ?? symbol.declarations?.[0] ?? contextNode
  const type = checker.getTypeOfSymbolAtLocation(symbol, declaration)
  return checker.typeToString(
    type,
    declaration,
    ts.TypeFormatFlags.NoTruncation | ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope,
  )
}

function extractTokenItemsFromInterface(
  checker: ts.TypeChecker,
  declaration: ts.InterfaceDeclaration,
  source: TokenSource,
): TokenMetaItem[] {
  const type = checker.getTypeAtLocation(declaration)
  return type.getProperties()
    .filter(symbol => !shouldSkipTokenSymbol(symbol))
    .map((symbol) => {
      const desc = getJsDocTagText(symbol, '@desc') || getJsDocTagText(symbol, 'desc')
      const descEn = getJsDocTagText(symbol, '@descEN') || getJsDocTagText(symbol, 'descEN')
      const name = getJsDocTagText(symbol, '@nameZH') || getJsDocTagText(symbol, 'nameZH')
      const nameEn = getJsDocTagText(symbol, '@nameEN') || getJsDocTagText(symbol, 'nameEN')

      return {
        token: symbol.getName(),
        type: getSymbolTypeText(checker, symbol, declaration),
        desc,
        descEn,
        name,
        nameEn,
        source,
      }
    })
}

function extractPresetColors(sourceFile: ts.SourceFile): string[] {
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue
    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || declaration.name.text !== 'PresetColors') continue
      if (!declaration.initializer) continue

      let initializer: ts.Expression = declaration.initializer
      if (ts.isAsExpression(initializer) || ts.isTypeAssertionExpression(initializer)) {
        initializer = initializer.expression
      }

      if (!ts.isArrayLiteralExpression(initializer)) continue

      return initializer.elements
        .filter(ts.isStringLiteral)
        .map(element => element.text)
    }
  }
  return []
}

function createPresetColorTokenList(colors: string[]): TokenMetaItem[] {
  return colors.map(color => ({
    token: color,
    type: 'color',
    desc: `预设${color}颜色`,
    descEn: `Preset ${color} color`,
    name: `预设${color}颜色`,
    nameEn: `Preset ${color} color`,
    source: 'seed',
  }))
}

function formatDateISO(date: Date): string {
  return date.toISOString().slice(0, 10)
}

function formatDateTimeISO(date: Date): string {
  return date.toISOString()
}

function escapeTableCell(value: string): string {
  return value.replace(/\|/g, '\\|').replace(/\n/g, '<br />')
}

function toCodeSpan(value: string): string {
  return `\`${escapeTableCell(value)}\``
}

function toSkillRelativePath(referencePath: string | null): string {
  if (!referencePath) {
    return 'none'
  }
  return toPosix(path.join('references', referencePath))
}

function specialComponentName(value: string): string {
  const specialComponentNames: Record<string, string> = {
    qrcode: 'QRCode',
  }
  if (specialComponentNames[value]) {
    return specialComponentNames[value]
  }
  return value.replace(/(^(.)|-(.))/g, match => match.replace('-', '').toUpperCase())
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

function toCamelCase(value: string): string {
  return value.replace(/-([a-z])/g, (_match, letter: string) => letter.toUpperCase())
}

function buildNestedStructure(flatSemantics: Record<string, string>) {
  const result: Record<string, any> = {}
  const nestedKeys = new Set<string>()

  for (const key of Object.keys(flatSemantics)) {
    if (key.includes('.')) {
      nestedKeys.add(key.split('.')[0]!)
    }
  }

  for (const [key, value] of Object.entries(flatSemantics)) {
    if (key.includes('.')) {
      const parts = key.split('.')
      let current = result
      for (let i = 0; i < parts.length - 1; i += 1) {
        const part = parts[i]!
        if (!current[part] || typeof current[part] === 'string') {
          current[part] = {}
        }
        current = current[part]
      }
      current[parts[parts.length - 1]!] = value
      continue
    }

    if (!nestedKeys.has(key)) {
      result[key] = value
      continue
    }

    if (!result[key]) {
      result[key] = {}
    }
  }

  return result
}

function generateMarkdownStructure(obj: Record<string, any>, indent = 0): string {
  let result = ''
  for (const [key, value] of Object.entries(obj)) {
    const indentStr = '  '.repeat(indent)
    if (typeof value === 'string') {
      result += `${indentStr}- \`${key}\`: ${value}\n`
    } else {
      result += `${indentStr}- \`${key}\`:\n`
      result += generateMarkdownStructure(value, indent + 1)
    }
  }
  return result
}

function countSemanticLeaves(input: Record<string, any>): number {
  let count = 0
  for (const value of Object.values(input)) {
    if (typeof value === 'string') {
      count += 1
      continue
    }
    if (value && typeof value === 'object') {
      count += countSemanticLeaves(value)
    }
  }
  return count
}

function sortObjectDeep<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) => sortObjectDeep(item)) as T
  }
  if (!value || typeof value !== 'object') {
    return value
  }
  const sorted = Object.keys(value as Record<string, unknown>)
    .sort((a, b) => a.localeCompare(b))
    .reduce<Record<string, unknown>>((acc, key) => {
      acc[key] = sortObjectDeep((value as Record<string, unknown>)[key])
      return acc
    }, {})
  return sorted as T
}

function extractLocaleInfo(content: string): { cn: string; en: string } | null {
  const cnMatch = content.match(/cn:\s*\{([\s\S]*?)\}\s*,\s*en\s*:/)
  const enMatch = content.match(/en:\s*\{([\s\S]*?)\}\s*[,}]/)
  if (!cnMatch && !enMatch) {
    return null
  }
  return {
    cn: cnMatch?.[1] ?? '',
    en: enMatch?.[1] ?? '',
  }
}

function extractFlatSemantics(localeContent: string): Record<string, string> {
  const flat: Record<string, string> = {}
  const matches = localeContent.matchAll(/['"]?([^'":\s]+)['"]?\s*:\s*['"]([^'"]+)['"],?/g)
  for (const match of matches) {
    const key = match[1]
    const value = match[2]
    if (key && value) {
      flat[key] = value
    }
  }
  return flat
}

async function resolveLocalImportFile(fromFile: string, importPath: string): Promise<string | null> {
  const basePath = path.resolve(path.dirname(fromFile), importPath)
  const candidates = [
    basePath,
    `${basePath}.ts`,
    `${basePath}.tsx`,
    `${basePath}.js`,
    `${basePath}.jsx`,
    path.join(basePath, 'index.ts'),
    path.join(basePath, 'index.tsx'),
    path.join(basePath, 'index.js'),
    path.join(basePath, 'index.jsx'),
  ]

  for (const candidate of candidates) {
    if (await pathExists(candidate)) {
      return candidate
    }
  }

  return null
}

async function loadLocaleSourceContent(docPath: string, content: string) {
  const inlineLocaleInfo = extractLocaleInfo(content)
  if (inlineLocaleInfo) {
    return { localeInfo: inlineLocaleInfo }
  }

  const importMatch = content.match(/import\s+\{\s*locales\s*\}\s+from\s+['"]([^'"]+)['"]/)
  const importPath = importMatch?.[1]
  if (!importPath || !importPath.startsWith('.')) {
    return null
  }

  const localeFilePath = await resolveLocalImportFile(docPath, importPath)
  if (!localeFilePath) {
    return null
  }

  const localeFileContent = await fs.readFile(localeFilePath, 'utf8')
  const localeInfo = extractLocaleInfo(localeFileContent)
  if (!localeInfo) {
    return null
  }

  return { localeInfo }
}

function extractSemanticNameLocaleKeyPairs(content: string): Array<{ name: string; localeKey: string }> {
  const pairs: Array<{ name: string; localeKey: string }> = []
  const matches = content.matchAll(/\{\s*name\s*:\s*['"]([^'"]+)['"]\s*,\s*desc\s*:\s*t\(\s*['"]([^'"]+)['"]\s*\)[\s\S]*?\}/g)
  for (const match of matches) {
    const name = match[1]
    const localeKey = match[2]
    if (!name || !localeKey) continue
    pairs.push({ name, localeKey })
  }
  return pairs
}

function pickSemanticEntries(
  localeSemantics: Record<string, string>,
  semanticPairs: Array<{ name: string; localeKey: string }>,
): Record<string, string> {
  if (semanticPairs.length === 0) {
    return localeSemantics
  }

  return semanticPairs.reduce<Record<string, string>>((acc, pair) => {
    const desc = localeSemantics[pair.localeKey]
    if (desc) {
      acc[pair.name] = desc
    }
    return acc
  }, {})
}

function renderSemanticMarkdown(
  entries: SemanticEntry[],
  preferredLang: 'en-US' | 'zh-CN',
): string {
  const zh = preferredLang === 'zh-CN'
  const lines: string[] = []
  lines.push(zh ? '# Antdv Next 组件语义化结构化描述' : '# Antdv Next Component Semantic Structured Descriptions')
  lines.push('')
  lines.push(
    zh
      ? '本文档从组件 `_semantic` 示例中提取语义化 DOM 描述，并整理为便于 AI 识别的结构化信息。'
      : 'This document extracts semantic DOM descriptions from component `_semantic` demos and formats them into AI-friendly structured data.',
  )
  lines.push('')
  lines.push(`> ${zh ? '语义条目总数' : 'Total semantic entries'}: ${entries.length}`)
  lines.push(`> ${zh ? '包含语义描述的组件数' : 'Components with semantic descriptions'}: ${new Set(entries.map((item) => item.component)).size}`)
  lines.push('')
  lines.push('## Component List')
  lines.push('')

  const sorted = [...entries].sort((a, b) => a.key.localeCompare(b.key))
  for (const entry of sorted) {
    lines.push(`### ${entry.key}`)
    lines.push('')
    lines.push(`- ${zh ? '组件' : 'Component'}: \`${entry.component}\``)
    if (entry.variant) {
      lines.push(`- ${zh ? '变体' : 'Variant'}: \`${entry.variant}\``)
    }
    lines.push(`- ${zh ? '语义节点数' : 'Semantic nodes'}: ${entry.leafCount}`)
    lines.push(`- ${zh ? '来源示例' : 'Source demo'}: \`${entry.sourceDemo}\``)
    lines.push('')
    lines.push(generateMarkdownStructure(entry.semantics).trimEnd())
    lines.push('')
  }

  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n'
}

const semanticConvertMap: Record<string, string> = {
  'badge:ribbon': 'ribbon',
  'floatButton:group': 'floatButtonGroup',
  'input:input': 'input',
  'input:otp': 'otp',
  'input:search': 'inputSearch',
  'input:textarea': 'textArea',
}

function resolveSemanticKey(componentName: string, fileName: string): { key: string; variant: string | null } {
  let semanticKey = toCamelCase(componentName)
  let variant: string | null = null

  if (fileName !== '_semantic') {
    variant = fileName.replace(/^_semantic[-_]?/, '') || null
    if (variant) {
      semanticKey = `${semanticKey}:${variant}`
    }
  }

  semanticKey = semanticConvertMap[semanticKey] ?? semanticKey
  return { key: semanticKey, variant }
}

async function collectSemanticEntries(
  repoRoot: string,
  componentsRoot: string,
  preferredLang: 'en-US' | 'zh-CN',
): Promise<SemanticEntry[]> {
  const semanticExts = ['.vue', '.tsx', '.ts', '.jsx', '.js']
  const allFiles = (
    await Promise.all(semanticExts.map((ext) => listFiles(componentsRoot, ext)))
  ).flat()
  const semanticFiles = [...new Set(allFiles)]
    .filter((file) => /^_semantic[-_]?.*\.(vue|tsx|ts|js|jsx)$/.test(path.basename(file)))
    .sort((a, b) => a.localeCompare(b))

  const entries: SemanticEntry[] = []
  for (const docPath of semanticFiles) {
    try {
      const content = await fs.readFile(docPath, 'utf8')
      const componentName = path.basename(path.dirname(path.dirname(docPath)))
      const ext = path.extname(docPath)
      const fileName = path.basename(docPath, ext)
      const { key, variant } = resolveSemanticKey(componentName, fileName)

      const localeSource = await loadLocaleSourceContent(docPath, content)
      if (!localeSource) continue

      const semanticPairs = extractSemanticNameLocaleKeyPairs(content)
      const localeContent = preferredLang === 'zh-CN' ? localeSource.localeInfo.cn : localeSource.localeInfo.en
      const flat = pickSemanticEntries(extractFlatSemantics(localeContent), semanticPairs)
      if (Object.keys(flat).length === 0) continue

      const semantics = buildNestedStructure(flat)
      entries.push({
        key,
        component: componentName,
        variant,
        sourceDemo: toPosix(path.relative(repoRoot, docPath)),
        semantics,
        leafCount: countSemanticLeaves(semantics),
      })
    } catch (error) {
      console.error(`Failed to extract semantic info from ${docPath}:`, error)
    }
  }

  return entries
}

async function generateSemanticArtifacts(
  repoRoot: string,
  referencesDir: string,
  componentsRoot: string,
  preferredLang: 'en-US' | 'zh-CN',
): Promise<SemanticArtifacts> {
  const entries = await collectSemanticEntries(repoRoot, componentsRoot, preferredLang)
  if (entries.length === 0) {
    return {
      markdownFile: null,
      jsonFile: null,
      totalEntries: 0,
      totalComponents: 0,
      totalLeaves: 0,
      byComponent: {},
    }
  }

  const sortedEntries = [...entries].sort((a, b) => a.key.localeCompare(b.key))
  const byComponent: Record<string, { keys: string[]; leafCount: number }> = {}
  for (const entry of sortedEntries) {
    if (!byComponent[entry.component]) {
      byComponent[entry.component] = { keys: [], leafCount: 0 }
    }
    byComponent[entry.component]!.keys.push(entry.key)
    byComponent[entry.component]!.leafCount += entry.leafCount
  }
  for (const info of Object.values(byComponent)) {
    info.keys.sort((a, b) => a.localeCompare(b))
  }

  await fs.mkdir(referencesDir, { recursive: true })

  const markdownPath = path.join(referencesDir, 'llms-semantic.md')
  const jsonPath = path.join(referencesDir, 'llms-semantic.json')

  const markdown = renderSemanticMarkdown(sortedEntries, preferredLang)
  await fs.writeFile(markdownPath, markdown, 'utf8')

  const json = sortObjectDeep({
    version: 1,
    language: preferredLang,
    generatedAt: formatDateTimeISO(new Date()),
    source: {
      repo: toPosix(path.relative(process.cwd(), repoRoot) || '.'),
      componentsDir: toPosix(path.relative(repoRoot, componentsRoot)),
    },
    totals: {
      entries: sortedEntries.length,
      components: Object.keys(byComponent).length,
      semanticNodes: sortedEntries.reduce((sum, item) => sum + item.leafCount, 0),
    },
    componentIndex: byComponent,
    entries: sortedEntries.map((entry) => ({
      key: entry.key,
      component: entry.component,
      variant: entry.variant,
      sourceDemo: entry.sourceDemo,
      leafCount: entry.leafCount,
      semantics: entry.semantics,
    })),
  })
  await fs.writeFile(jsonPath, `${JSON.stringify(json, null, 2)}\n`, 'utf8')

  return {
    markdownFile: toPosix(path.relative(referencesDir, markdownPath)),
    jsonFile: toPosix(path.relative(referencesDir, jsonPath)),
    totalEntries: sortedEntries.length,
    totalComponents: Object.keys(byComponent).length,
    totalLeaves: sortedEntries.reduce((sum, item) => sum + item.leafCount, 0),
    byComponent,
  }
}

function filterOutPresetColorTokens(tokens: TokenMetaItem[], presetColors: string[]): TokenMetaItem[] {
  return tokens.filter(item => !presetColors.some(color => item.token.startsWith(color)))
}

function dedupeTokenItems(tokens: TokenMetaItem[], seen: Set<string>): TokenMetaItem[] {
  return tokens.filter((item) => {
    if (seen.has(item.token)) {
      return false
    }
    seen.add(item.token)
    return true
  })
}

async function collectTokenMetadata(repoRoot: string): Promise<TokenMetadata> {
  const packageRoot = path.join(repoRoot, 'packages', 'antdv-next')
  const srcRoot = path.join(packageRoot, 'src')
  const interfaceRoot = path.join(srcRoot, 'theme', 'interface')
  const program = createTypeScriptProgram(packageRoot)
  const checker = program.getTypeChecker()

  const seedPath = path.join(interfaceRoot, 'seeds.ts')
  const mapPath = path.join(interfaceRoot, 'maps', 'index.ts')
  const aliasPath = path.join(interfaceRoot, 'alias.ts')
  const presetColorsPath = path.join(interfaceRoot, 'presetColors.ts')

  const seedSourceFile = program.getSourceFile(seedPath)
  const mapSourceFile = program.getSourceFile(mapPath)
  const aliasSourceFile = program.getSourceFile(aliasPath)
  const presetColorsSourceFile = program.getSourceFile(presetColorsPath)

  if (!seedSourceFile || !mapSourceFile || !aliasSourceFile || !presetColorsSourceFile) {
    throw new Error('Failed to load one or more token interface source files from upstream repository')
  }

  const seedDeclaration = findInterfaceDeclaration(seedSourceFile, 'SeedToken')
  const mapDeclaration = findInterfaceDeclaration(mapSourceFile, 'MapToken')
  const aliasDeclaration = findInterfaceDeclaration(aliasSourceFile, 'AliasToken')

  if (!seedDeclaration || !mapDeclaration || !aliasDeclaration) {
    throw new Error('Failed to locate SeedToken, MapToken, or AliasToken declarations')
  }

  const presetColors = extractPresetColors(presetColorsSourceFile)

  const seedTokens = filterOutPresetColorTokens(
    extractTokenItemsFromInterface(checker, seedDeclaration, 'seed'),
    presetColors,
  ).concat(createPresetColorTokenList(presetColors))

  const seenSeed = new Set(seedTokens.map(item => item.token))
  const mapTokens = dedupeTokenItems(
    filterOutPresetColorTokens(
      extractTokenItemsFromInterface(checker, mapDeclaration, 'map'),
      presetColors,
    ),
    seenSeed,
  )

  const seenMap = new Set([...seenSeed, ...mapTokens.map(item => item.token)])
  const aliasTokens = dedupeTokenItems(
    filterOutPresetColorTokens(
      extractTokenItemsFromInterface(checker, aliasDeclaration, 'alias'),
      presetColors,
    ),
    seenMap,
  )

  const styleFiles = (
    await Promise.all([
      listFiles(srcRoot, '.ts'),
      listFiles(srcRoot, '.tsx'),
    ])
  ).flat()
    .filter(file => /\/style\/(index|token)\.tsx?$/.test(toPosix(file)))
    .sort((a, b) => a.localeCompare(b))

  const componentTokens: Record<string, TokenMetaItem[]> = {}

  for (const filePath of styleFiles) {
    const sourceFile = program.getSourceFile(filePath)
    if (!sourceFile) continue

    const declaration = findInterfaceDeclaration(sourceFile, 'ComponentToken')
    if (!declaration) continue

    const relativePath = toPosix(path.relative(srcRoot, filePath))
    const componentSlug = relativePath.split('/')[0]
    if (!componentSlug) continue

    const componentKey = specialComponentName(componentSlug)
    const items = extractTokenItemsFromInterface(checker, declaration, 'alias')
    if (!componentTokens[componentKey] || items.length > 0) {
      componentTokens[componentKey] = items
    }
  }

  return {
    globalTokens: [...seedTokens, ...mapTokens, ...aliasTokens],
    componentTokens,
  }
}

function sourceLabel(source: TokenSource, preferredLang: 'en-US' | 'zh-CN'): string {
  if (preferredLang === 'zh-CN') {
    if (source === 'seed') return 'Seed'
    if (source === 'map') return 'Map'
    return 'Alias'
  }
  if (source === 'seed') return 'Seed'
  if (source === 'map') return 'Map'
  return 'Alias'
}

function renderGlobalTokenMarkdown(
  tokens: TokenMetaItem[],
  preferredLang: 'en-US' | 'zh-CN',
): string {
  const zh = preferredLang === 'zh-CN'
  const lines: string[] = []
  lines.push(zh ? '# 全局主题变量' : '# Global Theme Tokens')
  lines.push('')
  lines.push(
    zh
      ? '这些变量通过 `ConfigProvider` 的 `theme.token` 配置，用于定义全局 Design Token。下表只保留变量定义，不包含默认值。'
      : 'Use these variables through `ConfigProvider` `theme.token` to define global Design Tokens. This table lists definitions only and does not include values.',
  )
  lines.push('')
  lines.push('```vue')
  lines.push('<a-config-provider')
  lines.push('  :theme="{')
  lines.push('    token: {')
  lines.push(zh ? '      // 全局 token 配置' : '      // Global token configuration')
  lines.push('    },')
  lines.push('  }"')
  lines.push('>')
  lines.push('  ...')
  lines.push('</a-config-provider>')
  lines.push('```')
  lines.push('')
  lines.push(zh ? '## Token 列表' : '## Token List')
  lines.push('')
  lines.push(zh ? '| Token | 类型 | 来源层级 | 说明 |' : '| Token | Type | Source | Description |')
  lines.push(zh ? '| --- | --- | --- | --- |' : '| --- | --- | --- | --- |')

  for (const item of tokens) {
    const description = zh ? (item.desc || item.name || '-') : (item.descEn || item.nameEn || '-')
    lines.push(`| ${toCodeSpan(item.token)} | ${toCodeSpan(item.type || 'unknown')} | ${sourceLabel(item.source, preferredLang)} | ${escapeTableCell(description)} |`)
  }

  lines.push('')
  return lines.join('\n')
}

function renderComponentTokenMarkdown(
  componentSlug: string,
  componentKey: string,
  fallbackComponentKey: string,
  tokens: TokenMetaItem[],
  preferredLang: 'en-US' | 'zh-CN',
): string {
  const zh = preferredLang === 'zh-CN'
  const lines: string[] = []
  lines.push(zh ? `# ${componentSlug} 主题变量` : `# ${componentSlug} Token`)
  lines.push('')
  lines.push(
    zh
      ? `这些变量通过 \`theme.components.${componentKey}\` 配置。文档仅保留变量定义，不包含默认值。`
      : `Use these variables through \`theme.components.${componentKey}\`. This document lists definitions only and does not include values.`,
  )

  if (componentKey !== fallbackComponentKey) {
    lines.push('')
    lines.push(
      zh
        ? `当前目录复用 \`${componentKey}\` 的组件主题配置。`
        : `This directory reuses the \`${componentKey}\` component theme configuration.`,
    )
  }

  lines.push('')
  lines.push('```vue')
  lines.push('<a-config-provider')
  lines.push('  :theme="{')
  lines.push('    token: {')
  lines.push(zh ? '      // 全局 token 配置' : '      // Global token configuration')
  lines.push('    },')
  lines.push('    components: {')
  lines.push(`      ${componentKey}: {`)
  lines.push(zh ? '        // 具体的 token 名称: value' : '        // Token name: value')
  lines.push('      },')
  lines.push('    },')
  lines.push('  }"')
  lines.push('>')
  lines.push('  ...')
  lines.push('</a-config-provider>')
  lines.push('```')
  lines.push('')
  lines.push(zh ? '## Token 列表' : '## Token List')
  lines.push('')
  lines.push(zh ? '| Token | 类型 | 说明 |' : '| Token | Type | Description |')
  lines.push(zh ? '| --- | --- | --- |' : '| --- | --- | --- |')

  for (const item of tokens) {
    const description = zh ? (item.desc || item.name || '-') : (item.descEn || item.nameEn || '-')
    lines.push(`| ${toCodeSpan(item.token)} | ${toCodeSpan(item.type || 'unknown')} | ${escapeTableCell(description)} |`)
  }

  lines.push('')
  return lines.join('\n')
}

function extractComponentTokenKey(content: string): string | null {
  const match = content.match(/<ComponentTokenTable\b[^>]*\bcomponent="([^"]+)"/)
  return match?.[1]?.trim() || null
}

function resolveComponentTokenKey(
  componentSlug: string,
  componentTokens: Record<string, TokenMetaItem[]>,
  ...candidates: Array<string | null>
): string | null {
  const fallback = specialComponentName(componentSlug)
  const values = [...candidates, fallback]
    .filter((value): value is string => Boolean(value))
    .filter((value, index, array) => array.indexOf(value) === index)

  for (const value of values) {
    if ((componentTokens[value] ?? []).length > 0) {
      return value
    }
  }

  return values[0] ?? null
}

async function resolvePagesSourceDirs(repoRoot: string): Promise<{ componentsRoot: string; docsRoot: string; pagesRoot: string }> {
  const candidatePagesRoots = [
    path.join(repoRoot, 'docs', 'src', 'pages'),
    path.join(repoRoot, 'playground', 'src', 'pages'),
  ]

  for (const pagesRoot of candidatePagesRoots) {
    const componentsRoot = path.join(pagesRoot, 'components')
    const docsRoot = path.join(pagesRoot, 'docs', 'vue')
    if (await pathExists(componentsRoot)) {
      return { componentsRoot, docsRoot, pagesRoot }
    }
  }

  throw new Error(
    `Unable to locate docs source pages. Checked: ${candidatePagesRoots.map((p) => toPosix(p)).join(', ')}`,
  )
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

function rewriteInternalLinks(content: string, currentPath: string, referencesDir: string): string {
  const currentDir = path.dirname(currentPath)
  const vueDocsRoot = path.join(referencesDir, 'docs', 'vue')
  const componentsRoot = path.join(referencesDir, 'components')

  let output = content
  output = output.replace(/\/docs\/vue\/([a-z0-9-]+)\b/g, (_match, slug: string) => {
    const target = path.join(vueDocsRoot, `${slug}.md`)
    return toPosix(path.relative(currentDir, target))
  })
  output = output.replace(/\/components\/([a-z0-9-]+)(?=[#/?)]|$)/gi, (_match, slug: string) => {
    let normalized = slug.toLowerCase()
    if (normalized.endsWith('-cn') || normalized.endsWith('-en')) {
      normalized = normalized.replace(/-(cn|en)$/, '')
    }
    const target = path.join(componentsRoot, normalized, 'docs.md')
    return toPosix(path.relative(currentDir, target))
  })
  return output
}

function rewriteDocs(markdown: string, currentPath: string, referencesDir: string): string {
  let output = markdown
  const frontmatterMatch = output.match(/^---\n([\s\S]*?)\n---\n/)
  if (frontmatterMatch) {
    const frontmatterRaw = frontmatterMatch[1]
    const frontmatterLines = frontmatterRaw.split(/\r?\n/)
    const kept: string[] = []
    const keepKeys = new Set(['title', 'subtitle', 'description'])
    for (const line of frontmatterLines) {
      if (/^\s+/.test(line)) continue
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const key = trimmed.split(':')[0]?.trim()
      if (key && keepKeys.has(key)) {
        kept.push(line)
      }
    }
    const rebuilt = ['---', ...kept, '---', ''].join('\n')
    output = rebuilt + output.slice(frontmatterMatch[0].length)
  }

  output = rewriteInternalLinks(output, currentPath, referencesDir)

  const hasDemoGroup = /<demo-group\b/.test(output)
  if (hasDemoGroup) {
    const examplesHeadingRegex = /##\s*[^\n]*\{#examples\}/g
    let insertHeading = true
    if (examplesHeadingRegex.test(output)) {
      output = output.replace(examplesHeadingRegex, '## Demos')
      insertHeading = false
    }
    const tableHeader = '| Demo | Path |\n| --- | --- |\n'
    output = output.replace(
      /<demo-group[^>]*>/g,
      insertHeading ? `\n\n## Demos\n\n${tableHeader}` : `\n\n${tableHeader}`,
    )
    output = output.replace(/<\/demo-group>/g, '\n')
  }
  output = output.replace(/^[ \t]+<demo\b/gm, '<demo')
  output = output.replace(
    /<demo\b[^>]*\bsrc="([^"]+)"[^>]*>([\s\S]*?)<\/demo>/g,
    (_match, rawSrc: string, rawTitle: string) => {
      const title = String(rawTitle || '').trim()
      const demoSrc = normalizeDemoSrc(String(rawSrc || ''))
      const demoMarkdown = demoSrc.replace(/\.vue$/, '.md')
      const label = title || path.posix.basename(demoMarkdown, '.md')
      return `| ${label} | ${demoMarkdown} |`
    },
  )
  output = output.replace(/^(#{2,6}[^\n{]+)\s*\{#[^}]+\}\s*$/gm, '$1')
  output = output.replace(
    /^#{2,3}[^\n]*(\{#design-token\}|design token|主题变量)[^\n]*\n[\s\S]*?(?=^#{2,3}\s|\n#\s|$)/gim,
    '',
  )
  output = output.replace(/^.*<ComponentTokenTable[^>]*>.*\n?/gm, '')
  output = output.replace(/^.*(customize-theme|Design Token|主题变量).*\n?/gim, '')
  output = output.replace(/^.*semantic-dom.*\n?/gim, '')
  output = output.replace(
    /^#{2,3}[^\n]*\{#semantic-dom\}[^\n]*\n[\s\S]*?(?=^#{2,3}\s|\n#\s|$)/gim,
    '',
  )
  output = output.replace(/\| --- \| --- \|\n\n\|/g, '| --- | --- |\n|')
  output = output.replace(/\n{3,}/g, '\n\n')
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
  currentPath: string,
  referencesDir: string,
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
  let result = lines.join('\n')
  result = rewriteInternalLinks(result, currentPath, referencesDir)
  result = result.replace(/^.*semantic-dom.*\n?/gim, '')
  result = result.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n'
  return result
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
  const docsOutDir = path.join(referencesDir, 'docs', 'vue')
  const preferredLang = normalizeLang(args.lang)

  const { componentsRoot, docsRoot, pagesRoot } = await resolvePagesSourceDirs(repoRoot)

  await fs.rm(componentsOutDir, { recursive: true, force: true })
  await fs.mkdir(componentsOutDir, { recursive: true })
  await fs.rm(docsOutDir, { recursive: true, force: true })
  await fs.mkdir(docsOutDir, { recursive: true })
  await fs.rm(path.join(referencesDir, 'components-index.json'), { force: true })
  await fs.rm(path.join(referencesDir, 'components-index.md'), { force: true })
  await fs.rm(path.join(referencesDir, 'llms-semantic.md'), { force: true })
  await fs.rm(path.join(referencesDir, 'llms-semantic.json'), { force: true })
  await fs.rm(path.join(referencesDir, 'global-token.md'), { force: true })

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
  const vueDocs: Array<{ name: string; file: string }> = []
  const semanticArtifacts = await generateSemanticArtifacts(repoRoot, referencesDir, componentsRoot, preferredLang)
  const tokenMetadata = await collectTokenMetadata(repoRoot)

  const globalTokenPath = path.join(referencesDir, 'global-token.md')
  await fs.writeFile(
    globalTokenPath,
    renderGlobalTokenMarkdown(tokenMetadata.globalTokens, preferredLang),
    'utf8',
  )

  if (await pathExists(docsRoot)) {
    const docEntries = await fs.readdir(docsRoot, { withFileTypes: true })
    const docSuffix = `.${preferredLang}.md`
    const excluded = new Set(['llms', 'skills', 'contributing', 'awesome', 'introduce'])
    for (const entry of docEntries) {
      if (!entry.isFile()) continue
      if (!entry.name.endsWith(docSuffix)) continue
      const baseName = entry.name.replace(docSuffix, '')
      if (excluded.has(baseName)) continue
      const sourcePath = path.join(docsRoot, entry.name)
      const outPath = path.join(docsOutDir, `${baseName}.md`)
      const content = await fs.readFile(sourcePath, 'utf8')
      const rewritten = rewriteDocs(content, outPath, referencesDir)
      await fs.writeFile(outPath, rewritten, 'utf8')
      vueDocs.push({
        name: baseName,
        file: toPosix(path.relative(referencesDir, outPath)),
      })
    }
    vueDocs.sort((a, b) => a.name.localeCompare(b.name))
  }

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

    const enDocContent = hasEn ? await fs.readFile(enDocPath, 'utf8') : ''
    const zhDocContent = hasZh ? await fs.readFile(zhDocPath, 'utf8') : ''
    const docContent = preferredLang === 'zh-CN' ? zhDocContent : enDocContent
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
    let tokenFile: string | null = null

    const fallbackComponentKey = specialComponentName(componentName)
    const tokenComponentKey = resolveComponentTokenKey(
      componentName,
      tokenMetadata.componentTokens,
      extractComponentTokenKey(enDocContent),
      extractComponentTokenKey(zhDocContent),
    )

    if (hasDoc) {
      const outPath = path.join(componentOutRoot, 'docs.md')
      const rewritten = rewriteDocs(docContent, outPath, referencesDir)
      await fs.writeFile(outPath, rewritten, 'utf8')
      if (preferredLang === 'zh-CN') {
        zhOut = toPosix(path.relative(referencesDir, outPath))
      } else {
        enOut = toPosix(path.relative(referencesDir, outPath))
      }
    }

    const demos: DemoEntry[] = []

    if (hasDemoDir) {
      for (const demoSrc of demoOrder) {
        const demoFile = path.join(componentPath, demoSrc)
        if (!(await pathExists(demoFile))) continue
        const vueSource = await fs.readFile(demoFile, 'utf8')
        const docsBlocks = extractDocsBlocks(vueSource)
        const titles = demoTitlesMap.get(demoSrc) ?? {}
        const demoName = demoSrc.replace(/^demo\//, '').replace(/\.vue$/, '')
        const title = titles.en || titles.zh || demoName
        const demoOutPath = path.join(componentOutRoot, 'demo', `${demoName}.md`)
        await fs.mkdir(path.dirname(demoOutPath), { recursive: true })
        const demoMarkdown = buildDemoMarkdown(title, vueSource, docsBlocks, preferredLang, demoOutPath, referencesDir)
        await fs.writeFile(demoOutPath, demoMarkdown, 'utf8')

        demos.push({
          name: demoName,
          title,
          titles,
          file: toPosix(path.relative(referencesDir, demoOutPath)),
        })
      }
    }

    if (tokenComponentKey && (tokenMetadata.componentTokens[tokenComponentKey] ?? []).length > 0) {
      const tokenOutPath = path.join(componentOutRoot, 'token.md')
      const tokenMarkdown = renderComponentTokenMarkdown(
        componentName,
        tokenComponentKey,
        fallbackComponentKey,
        tokenMetadata.componentTokens[tokenComponentKey]!,
        preferredLang,
      )
      await fs.writeFile(tokenOutPath, tokenMarkdown, 'utf8')
      tokenFile = toPosix(path.relative(referencesDir, tokenOutPath))
    }

    components.push({
      name: componentName,
      docs: {
        en: enOut,
        zh: zhOut,
      },
      demos,
      tokenFile,
      tokenComponentKey,
    })
  }

  const generatedAt = new Date()
  await fs.mkdir(referencesDir, { recursive: true })
  const tokenArtifacts: TokenArtifacts = {
    globalFile: toPosix(path.relative(referencesDir, globalTokenPath)),
    totalGlobalTokens: tokenMetadata.globalTokens.length,
    totalComponentSets: Object.values(tokenMetadata.componentTokens).filter(items => items.length > 0).length,
    totalComponentTokens: Object.values(tokenMetadata.componentTokens).reduce((sum, items) => sum + items.length, 0),
  }

  const generationPath = path.join(outputRoot, 'GENERATION.md')
  const generationLines = [
    '# Generation Info',
    '',
    `- Source: \`${repoDisplayPath}\``,
    `- Git SHA: \`${gitSha ?? 'unknown'}\``,
    `- Generated: ${formatDateISO(generatedAt)}`,
    `- Language: ${preferredLang}`,
    `- Source Pages Root: \`${toPosix(path.relative(repoRoot, pagesRoot))}\``,
    '- Token Metadata Source: upstream TypeScript declarations parsed locally in this repository',
    `- Semantic Structured Entries: ${semanticArtifacts.totalEntries}`,
    `- Semantic Components: ${semanticArtifacts.totalComponents}`,
    `- Semantic Nodes: ${semanticArtifacts.totalLeaves}`,
    `- Global Tokens: ${tokenArtifacts.totalGlobalTokens}`,
    `- Component Token Sets: ${tokenArtifacts.totalComponentSets}`,
    `- Component Tokens: ${tokenArtifacts.totalComponentTokens}`,
    '',
  ]
  await fs.writeFile(generationPath, generationLines.join('\n'), 'utf8')

  const skillPath = path.join(outputRoot, 'SKILL.md')
  const skillLines: string[] = [
    '---',
    'name: antdv-next',
    'description: Antdv Next Vue 3 component library. Use when locating component API docs, props/events/slots, playground demos, or theme token definitions.',
    'metadata:',
    '  author: Antdv Next team',
    `  version: \"${formatDateISO(generatedAt)}\"`,
    '  source: Generated from https://github.com/antdv-next/antdv-next, script located in this repo at scripts/generate-antdv-next-skill.ts',
    '---',
    '',
    '# Antdv Next',
    '',
    `> The skill is based on Antdv Next docs and demos, generated at ${formatDateISO(generatedAt)}.`,
    '',
    `Language: ${preferredLang}`,
    '',
    'Docs and demos are copied into `references/` for offline use.',
    '',
    '## Vue Docs',
    '',
    '| Doc | Path |',
    '| --- | --- |',
  ]

  if (vueDocs.length === 0) {
    skillLines.push('| none | - |')
  } else {
    for (const doc of vueDocs) {
      skillLines.push(`| ${doc.name} | ${toSkillRelativePath(doc.file)} |`)
    }
  }

  skillLines.push('')
  skillLines.push('## AI Structured References')
  skillLines.push('')
  skillLines.push('| Type | Path | Notes |')
  skillLines.push('| --- | --- | --- |')
  skillLines.push(`| Global Token Markdown | ${toSkillRelativePath(tokenArtifacts.globalFile)} | Global Design Token definitions for \`ConfigProvider theme.token\` |`)
  if (semanticArtifacts.jsonFile) {
    skillLines.push(`| Semantic JSON | ${toSkillRelativePath(semanticArtifacts.jsonFile)} | Structured semantic DOM descriptions extracted from \`_semantic\` demos |`)
  } else {
    skillLines.push('| Semantic JSON | none | No semantic descriptions found |')
  }
  if (semanticArtifacts.markdownFile) {
    skillLines.push(`| Semantic Markdown | ${toSkillRelativePath(semanticArtifacts.markdownFile)} | Human-readable semantic structure summary |`)
  } else {
    skillLines.push('| Semantic Markdown | none | No semantic descriptions found |')
  }
  skillLines.push('')
  skillLines.push('## Components')
  skillLines.push('')
  skillLines.push('| Component | Doc | Demos | Token | Semantic |')
  skillLines.push('| --- | --- | --- | --- | --- |')
  for (const component of components) {
    const docPath = toSkillRelativePath(component.docs.en ?? component.docs.zh)
    const demosPath = component.demos.length > 0 ? toSkillRelativePath(`components/${component.name}/demo/`) : 'none'
    const tokenPath = toSkillRelativePath(component.tokenFile)
    const semanticInfo = semanticArtifacts.byComponent[component.name]
    const semanticCell = semanticInfo ? `${semanticInfo.keys.length} entries` : 'none'
    skillLines.push(`| ${component.name} | ${docPath} | ${demosPath} | ${tokenPath} | ${semanticCell} |`)
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
  if (semanticArtifacts.jsonFile || semanticArtifacts.markdownFile) {
    console.log(`Semantic structured references: ${semanticArtifacts.totalEntries} entries (${semanticArtifacts.totalLeaves} nodes).`)
  }
  console.log(`- ${toPosix(generationPath)}`)
  console.log(`- ${toPosix(skillPath)}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
