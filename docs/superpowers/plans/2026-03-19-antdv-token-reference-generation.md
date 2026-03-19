# Antdv Token Reference Generation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend the local Antdv Next skill generator so each language run emits global and per-component token markdown references from upstream source declarations.

**Architecture:** Reuse the current repository generator as the single entry point. Add a local token metadata extraction layer based on upstream TypeScript declarations, then render language-specific markdown files into `skills/antdv-next/references/` and expose them from the generated skill index.

**Tech Stack:** TypeScript, esno, TypeDoc, Node.js filesystem APIs

---

### Task 1: Map the generator touch points

**Files:**
- Modify: `scripts/generate-antdv-next-skill.ts`
- Verify: `skills/antdv-next/SKILL.md`
- Verify: `skills/antdv-next/GENERATION.md`

- [ ] **Step 1: Inspect the current generator flow for references, skill index, and generation notes**

Run: `rg -n "SKILL.md|GENERATION.md|references" scripts/generate-antdv-next-skill.ts`
Expected: existing functions that write references and summary markdown

- [ ] **Step 2: Identify where component entries are finalized**

Run: `rg -n "ComponentEntry|componentsRoot|componentEntries|entries" scripts/generate-antdv-next-skill.ts`
Expected: one clear place to attach token file generation

### Task 2: Add a failing verification target for token output

**Files:**
- Modify: `scripts/generate-antdv-next-skill.ts`

- [ ] **Step 1: Add generation assertions or explicit writes for token markdown paths**

Implementation target:

```ts
const globalTokenPath = path.join(referencesDir, 'global-token.md')
const componentTokenPath = path.join(referencesDir, 'components', component.name, 'token.md')
```

- [ ] **Step 2: Run the generator before implementation is complete to confirm token files are missing**

Run: `pnpm run generate:zh`
Expected: current output does not contain the new token files yet, confirming the new behavior is not already implemented

### Task 3: Implement token metadata extraction

**Files:**
- Modify: `scripts/generate-antdv-next-skill.ts`

- [ ] **Step 1: Port the upstream token metadata extraction approach into the local generator**

Implementation shape:

```ts
type TokenMetaItem = {
  token: string
  type: string | undefined
  desc: string
  descEn: string
  name: string
  nameEn: string
  source: string
}
```

- [ ] **Step 2: Extract global token declarations from theme interfaces**

Run extraction against:
- `SeedToken`
- `MapToken`
- `AliasToken`
- `PresetColors`

- [ ] **Step 3: Extract component token declarations from style entry points**

Expected behavior:
- normalize component names with the same special cases as upstream
- store by theme key, e.g. `Affix`, `Button`, `QRCode`

- [ ] **Step 4: Ensure duplicates are removed in the same order used upstream**

Expected behavior:
- alias excludes tokens already present in map
- map excludes tokens already present in seed

### Task 4: Render token markdown files

**Files:**
- Modify: `scripts/generate-antdv-next-skill.ts`

- [ ] **Step 1: Add markdown renderers for global and component token docs**

Implementation targets:

```ts
function renderGlobalTokenMarkdown(...)
function renderComponentTokenMarkdown(...)
```

- [ ] **Step 2: Add localized table headers and descriptions**

Expected behavior:
- Chinese run uses Chinese title, headings, and descriptions
- English run uses English title, headings, and descriptions

- [ ] **Step 3: Add localized `ConfigProvider` examples**

Expected behavior:
- global file focuses on `theme.token`
- component file shows both `theme.token` and `theme.components.ComponentKey`

- [ ] **Step 4: Write token markdown files into generated references**

Expected paths:
- `skills/antdv-next/references/global-token.md`
- `skills/antdv-next/references/components/<slug>/token.md`

### Task 5: Expose token docs in generated summaries

**Files:**
- Modify: `scripts/generate-antdv-next-skill.ts`
- Verify: `skills/antdv-next/SKILL.md`
- Verify: `skills/antdv-next/GENERATION.md`

- [ ] **Step 1: Add token references to the generated skill index**

Expected behavior:
- AI structured references section or a nearby section includes `global-token.md`
- component table indicates token docs when available

- [ ] **Step 2: Update generation notes to mention token reference output**

Expected behavior:
- generated metadata reflects the new artifacts and source extraction behavior

### Task 6: Regenerate and verify

**Files:**
- Verify: `skills/antdv-next/references/global-token.md`
- Verify: `skills/antdv-next/references/components/affix/token.md`
- Verify: `skills/antdv-next/references/components/button/token.md`
- Verify: `skills/antdv-next/SKILL.md`
- Verify: `skills/antdv-next/GENERATION.md`

- [ ] **Step 1: Run Chinese generation**

Run: `pnpm run generate:zh`
Expected: token markdown files are created with Chinese headers and descriptions

- [ ] **Step 2: Run English generation**

Run: `pnpm run generate:en`
Expected: token markdown files are recreated with English headers and descriptions

- [ ] **Step 3: Spot-check generated files**

Run: `sed -n '1,120p' skills/antdv-next/references/global-token.md`
Expected: localized headings and token table without values

- [ ] **Step 4: Confirm component token files exist only for tokenized components**

Run: `find skills/antdv-next/references/components -name token.md | sort | sed -n '1,40p'`
Expected: token files present for components with `ComponentToken`, absent for components without one
