---
title: Collapse
description: A content area which can be collapsed and expanded.
---

## When To Use

- Can be used to group or hide complex regions to keep the page clean.
- `Accordion` is a special kind of `Collapse`, which allows only one panel to be expanded at a time. It is often used for frequently asked questions (FAQ).

The API is aligned with `Collapse` of Antdv Next (`items`, `activeKey`, `accordion`, `collapsible`, `expandIcon`, etc.), and expanding / collapsing comes with a smooth height animation.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Accordion | demo/accordion.md |
| Declarative panels | demo/panel.md |
| Extra content and hidden arrow | demo/extra.md |
| Collapsible trigger area | demo/collapsible.md |
| Custom expand icon | demo/expand-icon.md |
| Ghost mode and sizes | demo/ghost.md |

## API

### Collapse Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| items | Panel configuration | [CollapseItemType](#collapseitemtype)[] | - |
| activeKey(v-model) | `key` of the currently expanded panels | `string \| number \| (string \| number)[]` | - |
| defaultActiveKey | `key` of the initially expanded panels | `string \| number \| (string \| number)[]` | - |
| accordion | Accordion mode, only one panel is expanded at a time | `boolean` | `false` |
| bordered | Whether to show the hairlines around and between panels | `boolean` | `true` |
| ghost | Ghost mode, transparent background and no hairlines | `boolean` | `false` |
| size | Size | `'small' \| 'middle' \| 'large'` | `'middle'` |
| collapsible | Collapsible trigger area of all panels | `'header' \| 'icon' \| 'disabled'` | - |
| expandIcon | Custom expand icon | `(panelProps: CollapsePanelInfo) => VueNode` | - |
| expandIconPlacement | Position of the expand icon | `'start' \| 'end'` | `'end'` |
| destroyOnHidden | Whether to destroy the panel content when collapsed | `boolean` | `false` |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'header' \| 'title' \| 'body' \| 'icon', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'header' \| 'title' \| 'body' \| 'icon', CSSProperties>` | - |
| ~~expandIconPosition~~ | Please use `expandIconPlacement` | `'start' \| 'end'` | - |

Panel content is lazily rendered by default: it is rendered on first expand and stays mounted afterwards.

### CollapseItemType

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier, the index is used when not set | `string \| number` | - |
| label | Panel title | `VueNode` | - |
| content | Panel content | `VueNode` | - |
| children | Alias of `content` | `VueNode` | - |
| extra | Extra content on the right side of the title | `VueNode` | - |
| showArrow | Whether to show the expand icon | `boolean` | `true` |
| collapsible | Collapsible trigger area of this panel, takes precedence over the same-named prop of `Collapse` | `'header' \| 'icon' \| 'disabled'` | - |
| forceRender | Render the content even if the panel has never been expanded | `boolean` | `false` |
| class | Class name of the panel | `string` | - |
| style | Style of the panel | `CSSProperties` | - |
| classes | Semantic structure class names of the panel | `Record<'header' \| 'title' \| 'body' \| 'icon', string>` | - |
| styles | Semantic structure styles of the panel | `Record<'header' \| 'title' \| 'body' \| 'icon', CSSProperties>` | - |

### Collapse Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the expanded panels change, the argument is always an array | `(key: (string \| number)[]) => void` |
| update:activeKey | Triggered when the expanded panels change, used by `v-model:activeKey` | `(key: (string \| number)[]) => void` |

### Collapse Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Declarative `<am-collapse-panel>`, rendered after `items` | - |
| expandIcon | Custom expand icon, takes precedence over the `expandIcon` prop | `{ panelKey, isActive, header, extra, showArrow, forceRender, collapsible }` |
| labelRender | Customize the title of `items` | `{ item: CollapseItemType, index: number }` |
| contentRender | Customize the content of `items` | `{ item: CollapseItemType, index: number }` |

### CollapsePanel

`<am-collapse-panel>` (`Collapse.Panel`) identifies a panel by its `key`.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier, corresponds to `activeKey` | `string \| number` | - |
| header | Panel title | `VueNode` | - |
| extra | Extra content on the right side of the title | `VueNode` | - |
| showArrow | Whether to show the expand icon | `boolean` | `true` |
| collapsible | Collapsible trigger area | `'header' \| 'icon' \| 'disabled'` | - |
| forceRender | Render the content even if the panel has never been expanded | `boolean` | `false` |
| classes | Semantic structure class names | `Record<'header' \| 'title' \| 'body' \| 'icon', string>` | - |
| styles | Semantic structure styles | `Record<'header' \| 'title' \| 'body' \| 'icon', CSSProperties>` | - |

| Slot | Description |
| --- | --- |
| default | Panel content |
| header | Panel title, takes precedence over the `header` prop |
| extra | Extra content, takes precedence over the `extra` prop |

## Design Token

Customize through `theme.components.Collapse` of `ConfigProvider`, or override the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-collapse-header-padding` | Header padding | `var(--am-padding-sm) var(--am-padding)` |
| `--am-collapse-header-min-height` | Minimum height of the header | `48px` |
| `--am-collapse-header-font-size` | Header font size | `var(--am-font-size-lg)` |
| `--am-collapse-header-color` | Header color | `var(--am-color-text)` |
| `--am-collapse-header-background` | Header background color | `var(--am-color-bg-container)` |
| `--am-collapse-content-padding` | Content padding | `var(--am-padding-sm) var(--am-padding)` |
| `--am-collapse-content-font-size` | Content font size | `var(--am-font-size)` |
| `--am-collapse-content-color` | Content color | `var(--am-color-text-secondary)` |
| `--am-collapse-content-background` | Content background color | `var(--am-color-bg-container)` |
| `--am-collapse-icon-size` | Expand icon size | `14px` |
| `--am-collapse-icon-color` | Expand icon color | `var(--am-color-text-tertiary)` |
| `--am-collapse-border-color` | Hairline color | `var(--am-color-split)` |

## Differences from PC

- It looks like a full-width list: `bordered` renders 0.5px hairlines instead of a rounded border, and the header and content share the container background color by default.
- `expandIconPlacement` defaults to `end` (arrow on the right), which matches mobile conventions; it defaults to `start` on PC.
- The `key` returned by `change` / `update:activeKey` keeps its original type (`string | number`) and is not converted to a string.
- A `CollapsePanel` used on its own (outside `Collapse`) maintains its own expanded state.
- Added `items[].children` as an alias of `content`.
