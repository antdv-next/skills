# Repository Guidelines

This repository generates single-language skill packages for Antdv Next (`skills/antdv-next/`) and Antdv Next Mobile (`skills/antdv-next-mobile/`) from the upstream docs and demos. Outputs are regenerated via `esno` scripts, by hand or by the `Sync skills` workflow.

## Project Structure & Module Organization

- `scripts/`: TypeScript generator (`scripts/generate-antdv-next-skill.ts`) that builds the skill references.
- `skills/antdv-next/`: Generated skill output, including `SKILL.md`, `GENERATION.md`, and `references/`.
- `skills/antdv-next/references/`: Copied docs and demo markdown (`components/**`, `docs/vue/**`).
- `repos/antdv-next/`: Git submodule with the upstream Antdv Next source (used as input for generation).
- `scripts/generate-antdv-next-mobile-skill.ts`: generator for `skills/antdv-next-mobile/`. Its output depends only on the source commit (no wall-clock dates), so regenerating the same commit produces no diff.
- `repos/antdv-next-mobile/`: Git submodule with the upstream Antdv Next Mobile source.
- `scripts/sync.ts` + `.github/workflows/sync.yml`: release-driven sync. Moves a submodule to the newest stable release tag when it does not contain that release yet, regenerates the skill and commits to `main`.
- `package.json`: Local scripts and dev dependencies for generation.

## Build, Test, and Development Commands

- `pnpm run generate:zh`: Generate Chinese references and `SKILL.md`.
- `pnpm run generate:en`: Generate English references and `SKILL.md`.
- `pnpm run generate`: Alias for English generation.
- `pnpm run generate:mobile` / `generate:mobile:zh`: Generate the Antdv Next Mobile skill.
- `pnpm run sync:check` / `pnpm run sync`: Report / apply the release-driven update of both skills.

These commands read from `repos/antdv-next` and rewrite docs/demos into `skills/antdv-next/references/`.

## Coding Style & Naming Conventions

- Language: TypeScript (`.ts`) with ESM (`"type": "module"`).
- Indentation: 2 spaces; keep lines concise and avoid excessive blank lines.
- Naming: `kebab-case` for markdown filenames; `camelCase` for variables/functions.
- Tools: `esno` executes TypeScript directly; keep generator logic deterministic and idempotent.

## Testing Guidelines

There are no automated tests in this repo. Validate changes by running a generate command and spot-checking:

- `skills/antdv-next/GENERATION.md`
- `skills/antdv-next/SKILL.md`
- A few sample docs and demos under `skills/antdv-next/references/`

## Commit & Pull Request Guidelines

No strict commit convention is enforced. Use clear, imperative commit messages (e.g., “Update generator link rewrites”).
PRs should include:

- A short summary of changes
- The command used to regenerate references
- Any notable behavior changes (e.g., removed sections, link rewrites)

## Agent-Specific Notes

- Do not commit contents of `repos/` other than the submodule pointer.
- Docs are single-language per run; pick the desired language before regenerating.
- Generated docs are normalized: frontmatter keeps only `title/subtitle/description`, headings drop `{#...}` anchors, and demo lists render as tables under `## Demos`.
- Sections about “Design Token/主题变量” and any `semantic-dom` content are removed. Demo content excludes `<docs>` blocks.
- Internal links are rewritten to local skill paths (e.g., `/docs/vue/*` and `/components/*` → `references/...`).
