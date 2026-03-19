# Antdv Next Token Reference Generation Design

## Goal

Extend this repository's local skill generator so each language run also produces:

- `skills/antdv-next/references/global-token.md`
- `skills/antdv-next/references/components/<component>/token.md`

These files should list token definitions only, without values, and should be generated directly from the upstream source code in `repos/antdv-next` without depending on upstream prebuilt token artifacts.

## Constraints

- The implementation must live in this repository.
- The generator must stay deterministic and idempotent.
- Chinese and English outputs are generated separately by the existing `--lang` flow.
- Token docs should use the generated component directory slug, but the example `ConfigProvider` snippet must use the real theme component key such as `Affix`, `Button`, `FloatButton`, `QRCode`.
- Empty token files should not be created for components without `ComponentToken`.

## Data Sources

### Global tokens

Read upstream theme interface declarations from `repos/antdv-next/packages/antdv-next/src/theme/interface/index.ts` through the same TypeDoc-based extraction approach used upstream in `packages/antdv-next/scripts/token/generate-token-meta.ts`.

Extract and merge:

- `SeedToken`
- `MapToken`
- `AliasToken`
- `PresetColors`

Keep token name, type, Chinese description, English description, Chinese name, English name, and source layer.

### Component tokens

Read component `ComponentToken` type declarations from upstream style entry points under `repos/antdv-next/packages/antdv-next/src/**/style`.

Use the upstream component-name normalization rules, including special cases like `qrcode -> QRCode`.

## Output Format

### `global-token.md`

Include:

1. Title and short description
2. `ConfigProvider` snippet focused on `theme.token`
3. A table containing:
   - Chinese run: `Token | 类型 | 来源层级 | 说明`
   - English run: `Token | Type | Source | Description`

### `components/<component>/token.md`

Include:

1. Title and short description
2. `ConfigProvider` snippet showing:
   - `theme.token`
   - `theme.components.<ComponentKey>`
3. A table containing:
   - Chinese run: `Token | 类型 | 说明`
   - English run: `Token | Type | Description`

Only list component token definitions, not inherited global tokens and not token values.

## Generator Integration

Integrate token extraction and markdown rendering into `scripts/generate-antdv-next-skill.ts`, either inline or through local helper functions in the same file.

Required changes:

- collect token metadata from upstream source files
- map component theme keys to generated component directory slugs
- emit `global-token.md`
- emit per-component `token.md`
- update `SKILL.md` generation so token references are discoverable from the skill index
- update `GENERATION.md` to mention token reference generation

## Error Handling

- If token extraction fails, the generator should fail loudly rather than silently producing partial token docs.
- If a component directory exists in generated references but has no component token definitions, skip `token.md`.
- If token metadata contains a component that is not present in generated component references, skip writing that file but keep generation of other valid token docs.

## Verification

Run both:

- `pnpm run generate:zh`
- `pnpm run generate:en`

Spot-check:

- `skills/antdv-next/references/global-token.md`
- `skills/antdv-next/references/components/affix/token.md`
- `skills/antdv-next/references/components/config-provider/docs.md`
- `skills/antdv-next/SKILL.md`
- `skills/antdv-next/GENERATION.md`
