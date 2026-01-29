# antdv-next-skills

Agent skills for Antdv Next component library development.

> 🚧 **Early Experiment / Community Project**
>
> This repository is an early experiment in creating specialized skills for AI agents to improve Antdv Next development. Skills are generated from the Antdv Next playground docs and demos. Please share feedback so we can improve coverage and accuracy.

## Installation

```bash
npx skills add antdv-next/skills
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

## Language

The generator supports a single language per run to keep references small:

```bash
pnpm run generate:en
pnpm run generate:zh
```

## Methodology

Skills are built from the Antdv Next playground documentation and demos. The generator converts demos into markdown and copies docs into `references/` so the skill works offline and does not depend on external links.

## License

MIT
