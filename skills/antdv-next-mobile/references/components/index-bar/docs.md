---
title: IndexBar
description: Indexed grouping and quick positioning for lists.
---

## When To Use

- Long lists grouped by letter (or any other index), such as contacts or a city selector.
- When you need to jump quickly to a group by tapping or dragging on the index on the right.

`IndexBar` is a mobile-only component made of `IndexBar` and `IndexBar.Anchor` (`<am-index-bar-anchor>`): just put an anchor before the content of each group.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Custom index list | demo/custom-index.md |
| Custom anchor content | demo/anchor-slot.md |
| Scroll to an anchor | demo/scroll-to.md |
| Highlight color and events | demo/highlight.md |

## API

### IndexBar Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| indexList | The index list on the right | `(string \| number)[]` | The `index` of all anchors inside (in document order) |
| sticky | Whether the anchors are sticky | `boolean` | `true` |
| stickyOffsetTop | Distance from the top of the scroll container while sticky, e.g. the height of a fixed navigation bar | `number` | `0` |
| zIndex | The z-index of the sticky anchors and the index bar | `number` | `10` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'sidebar' \| 'index' \| 'hint', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'sidebar' \| 'index' \| 'hint', CSSProperties>` | - |

### IndexBar Events

| Event | Description | Type |
| --- | --- | --- |
| select | Triggered when an index is tapped or dragged onto | `(index: string \| number) => void` |
| change | Triggered when the active anchor changes while scrolling | `(index: string \| number) => void` |

### IndexBar Slots

| Slot | Description |
| --- | --- |
| default | Anchors and list content |

### IndexBar Methods

| Method | Description | Type |
| --- | --- | --- |
| scrollTo | Scroll to the anchor of the given index | `(index: string \| number) => void` |

### IndexBar.Anchor Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| index | The index value | `string \| number` | - |
| rootClass | Class name of the root element | `string` | - |

| Slot | Description |
| --- | --- |
| default | Anchor content, shows `index` by default |

### Notes

- The component automatically finds the nearest scroll container (an ancestor whose `overflow-y` is `auto` / `scroll`, otherwise `window`) and listens to its scrolling.
- Sticky anchors are implemented with CSS `position: sticky`, so an anchor has to be a direct child of `IndexBar` (or its parent has to be tall enough) to stay sticky.
- The index bar on the right is vertically centered relative to the scroll container and does not use `position: fixed`, so it can be placed inside a popup or a local scroll area.

## Design Token

Customize through `theme.components.IndexBar` of `ConfigProvider`, or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-index-bar-highlight-color` | Highlight color of the active index and the sticky anchor | `var(--am-color-primary)` |
| `--am-index-bar-index-size` | Size of an index item | `16px` |
| `--am-index-bar-index-font-size` | Font size of an index item | `10px` |
| `--am-index-bar-index-color` | Text color of an index item | `var(--am-color-text-secondary)` |
| `--am-index-bar-anchor-height` | Height of the anchor | `32px` |
| `--am-index-bar-anchor-padding-inline` | Horizontal padding of the anchor | `var(--am-padding)` |
| `--am-index-bar-anchor-font-size` | Font size of the anchor | `var(--am-font-size)` |
| `--am-index-bar-anchor-color` | Text color of the anchor | `var(--am-color-text-secondary)` |
| `--am-index-bar-anchor-background` | Background color of the anchor | `var(--am-color-bg-layout)` |
| `--am-index-bar-hint-size` | Size of the center hint shown while dragging | `48px` |
| `--am-index-bar-z-index` | The z-index of the sticky anchors | `10` |
