---
title: Highlight
description: Highlights the parts of a text that match the keywords.
---

## When To Use

- To mark the text matching the search term in search results or suggestion lists.
- To emphasize some keywords inside a piece of text.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Multiple keywords | demo/multiple.md |
| Search results | demo/search.md |
| Custom style | demo/custom.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| content | Source text | `string` | `''` |
| keywords | Keyword(s) to highlight; empty strings are ignored | `string \| string[]` | - |
| caseSensitive | Whether matching is case-sensitive | `boolean` | `false` |
| autoEscape | Whether keywords are matched literally (RegExp special characters are escaped); when `false`, keywords are used as RegExp sources | `boolean` | `true` |
| tag | Tag of the root element | `string` | `'span'` |
| highlightTag | Tag of the matched text | `string` | `'mark'` |
| highlightClass | Extra class name of the matched text | `string` | - |
| unhighlightTag | Tag of the unmatched text; when neither it nor `unhighlightClass` is set, unmatched text is rendered as plain text nodes | `string` | - |
| unhighlightClass | Class name of the unmatched text; when set, unmatched text is wrapped in `unhighlightTag` (`span` by default) | `string` | - |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'highlight', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'highlight', CSSProperties>` | - |

- Overlapping or adjacent matches are merged into a single highlighted node.
- Text is always rendered as text nodes, never with `v-html`, so HTML inside `content` is not parsed.
- With `autoEscape` set to `false`, an invalid regular expression is ignored.

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| highlight | Custom content of a match, rendered inside `highlightTag` | `{ text: string, index: number }`, `index` is the position of the match (starting from 0) |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| getHighlightChunks | Named export, a helper that returns the split chunks so you can render them yourself | `(content: string, keywords?: string \| string[], options?: { caseSensitive?: boolean, autoEscape?: boolean }) => HighlightChunk[]` |

## Design Token

Customize through `theme.components.Highlight` of `ConfigProvider` or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-highlight-color` | Color of the highlighted text | `var(--am-color-primary)` |
| `--am-highlight-background` | Background of the highlighted text | `transparent` |
| `--am-highlight-font-weight` | Font weight of the highlighted text | `inherit` |
| `--am-highlight-padding-inline` | Horizontal padding of the highlighted text | `0` |
| `--am-highlight-border-radius` | Border radius of the highlighted text | `0` |

Highlight is inline text: the root element deliberately does not set `font-size`, `font-family`, `line-height` or `color` and inherits them all from its context.

## Differences from PC

- A mobile-only addition; Antdv Next (PC) has no counterpart.
