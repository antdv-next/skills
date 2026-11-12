---
title: Badge
description: Small numerical value or status descriptor at the top-right corner of an icon.
---

## When To Use

- Appears at the top-right corner of an icon, avatar or tab bar item to show the number of pending messages.
- Show only a small red dot to hint that something has been updated.
- Used standalone, as a status dot with text to describe a status.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Overflow count | demo/overflow.md |
| Red dot | demo/dot.md |
| Standalone | demo/standalone.md |
| Dynamic | demo/dynamic.md |
| Color and offset | demo/color.md |
| Status dot | demo/status.md |
| Ribbon | demo/ribbon.md |

## API

### Badge Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| count | The number to show (or text / a custom node). Displayed as `${overflowCount}+` when greater than `overflowCount`, hidden when 0 | `VueNode` | - |
| dot | Show a small red dot instead of the number | `boolean` | `false` |
| overflowCount | The max count to show | `number` | `99` |
| showZero | Whether to show the badge when the count is 0 | `boolean` | `false` |
| offset | Offset of the badge, `[right, down]`; numbers are in px | `[number \| string, number \| string]` | - |
| color | Custom badge color, supports preset color names and any CSS color | `string` | - |
| status | Render the badge as a status dot | `'success' \| 'processing' \| 'default' \| 'error' \| 'warning'` | - |
| text | Text next to the status dot. Takes effect when `status` or `color` is set and no content is wrapped; the same-named slot takes precedence | `VueNode` | - |
| size | Size of the badge, takes effect when `count` is set | `'default' \| 'small'` | `'default'` |
| title | Native `title` of the badge; set to `null` or `false` to remove it | `string \| null \| false` | `count` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'indicator', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'indicator', CSSProperties>` | - |

Preset color names: `pink` `red` `yellow` `orange` `cyan` `green` `blue` `purple` `geekblue` `magenta` `volcano` `gold` `lime`.

### Badge Slots

| Slot | Description |
| --- | --- |
| default | The content wrapped by the badge |
| count | Custom badge content, takes precedence over the `count` prop |
| text | Custom text of the status dot, takes precedence over the `text` prop |

### Badge.Ribbon Props

Use `<am-badge-ribbon>` in templates.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| text | Content of the ribbon; the same-named slot takes precedence | `VueNode` | - |
| color | Ribbon color, supports preset color names and any CSS color | `string` | Primary color |
| placement | Placement of the ribbon | `'start' \| 'end'` | `'end'` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'indicator' \| 'content', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'indicator' \| 'content', CSSProperties>` | - |

### Badge.Ribbon Slots

| Slot | Description |
| --- | --- |
| default | The content wrapped by the ribbon |
| text | Content of the ribbon, takes precedence over the `text` prop |

## Design Token

| Token | Description | Default |
| --- | --- | --- |
| `--am-badge-color` | Background color of the badge | `var(--am-color-error)` |
| `--am-badge-text-color` | Text color of the badge | `var(--am-color-text-light-solid)` |
| `--am-badge-size` | Height of the count badge | `18px` |
| `--am-badge-size-sm` | Height of the small count badge | `14px` |
| `--am-badge-font-size` | Font size of the count | `12px` |
| `--am-badge-font-size-sm` | Font size of the small count | `10px` |
| `--am-badge-dot-size` | Diameter of the red dot | `8px` |
| `--am-badge-status-size` | Diameter of the status dot | `6px` |
| `--am-badge-border-color` | Outline color of the badge | `var(--am-color-bg-container)` |
| `--am-ribbon-color` | Background color of the ribbon | `var(--am-color-primary)` |
| `--am-ribbon-text-color` | Text color of the ribbon | `var(--am-color-text-light-solid)` |
| `--am-ribbon-offset` | Distance the ribbon sticks out of the container | `8px` |

## Differences from PC

- There is no per-digit rolling animation when the number changes, only a zoom animation when the badge appears / disappears.
- When content is wrapped and only `status` / `color` is set (no `count`), it is shown directly as a small dot in that color.
- A string `count` can be shown as is (e.g. `new`, `hot`).
- `scrollNumberPrefixCls` is not supported; `classes` / `styles` only support the object form.
- More compact default sizes: the count badge is 18px high and the red dot is 8px.
