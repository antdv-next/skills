# Antdv Next Skills

Agent skills for Antdv Next component library development.

> 🚧 **Early Experiment / Community Project**
>
> This repository is an early experiment in creating specialized skills for AI agents to improve Antdv Next development. Skills are generated from the Antdv Next playground docs and demos. Please share feedback so we can improve coverage and accuracy.

## Installation

```bash
npx skills add antdv-next/skills

# Update skills
npx skills update antdv-next
```

## Usage

For the most reliable results, prefix your prompt with `use antdv-next skill`:

```
Use antdv-next skill, <your prompt here>
```

This explicitly triggers the skill. Without the prefix, skill triggering may be inconsistent depending on how closely your prompt matches the skill description keywords.

## Available Skills

| Skill | When to use | Description |
|-------|-------------|-------------|
| **antdv-next** | Antdv Next components | Component props/events/slots and playground demo usage |
| **antdv-next-mobile** | Antdv Next Mobile (`@antdv-next/mobile`) components | `am-*` component props/events/slots, demos, CSS variable tokens and differences from PC |

## Language

The generator supports a single language per run to keep references small:

```bash
pnpm run generate:en          # antdv-next
pnpm run generate:zh
pnpm run generate:mobile      # antdv-next-mobile
pnpm run generate:mobile:zh
```

## Automatic Sync

`.github/workflows/sync.yml` keeps the skills in step with upstream releases. Every 6 hours (or when run manually) `scripts/sync.ts` looks up the newest stable release tag of `antdv-next/antdv-next` (`antdv-next@x.y.z`) and `antdv-next/antdv-next-mobile` (`@antdv-next/mobile@x.y.z`). When a submodule under `repos/` does not contain that release yet, it is moved to the tag, the skill is regenerated in English and the result is committed to `main`.

```bash
pnpm run sync:check   # report what would be updated
pnpm run sync         # update the submodules and regenerate locally
```

## Methodology

Skills are built from the Antdv Next playground documentation and demos. The generator converts demos into markdown and copies docs into `references/` so the skill works offline and does not depend on external links.

## License

MIT
