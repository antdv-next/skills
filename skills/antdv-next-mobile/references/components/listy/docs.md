---
title: Listy
description: A high-performance data list with grouping, sticky headers, virtual scrolling and imperative scroll control.
---

## When To Use

- When a long list has to be rendered without paying the cost of mounting every row: only the rows around the visible area are rendered by default.
- When the data is grouped and the group headers should stick to the top, e.g. contacts, messages archived by date, products by category.
- When the scroll position needs imperative control (jump to an item, a group or a pixel offset).

### Listy, List and VirtualList

| | [List](../list/docs.md) | Listy | [VirtualList](../virtual-list/docs.md) |
| --- | --- | --- | --- |
| Purpose | "Cell" lists: settings pages, menus, form-like lists | Long, data-driven lists | The low-level windowed scroll container |
| Row structure | `ListItem`: title / description / prefix / extra / arrow | Fully custom (`itemRender`), only padding and a split line | Fully custom, no row styles at all |
| Scrolling | Scrolls with the page by default, optional virtual scrolling in data mode | Scrolls by itself (`height`), virtual scrolling on by default | Scrolls by itself |
| Groups / sticky headers | None (`header` is a static title) | Built in | None |
| Scroll to an item / a group | By index or `key` in data mode | By `key`, `groupKey` or pixels, aware of the sticky header | By index or `key` |

In short: use `List` for a moderate number of standard "cells"; use `Listy` for custom rows, very long data or sticky groups; use `VirtualList` to build your own list-like component. For contacts with an alphabet index use [IndexBar](../index-bar/docs.md).

## Examples

| Demo | Path |
| --- | --- |
| Basic | demo/basic.md |
| Virtual scrolling | demo/virtual.md |
| Grouping and sticky headers | demo/group.md |
| Scroll control | demo/scroll-to.md |
| Rich content | demo/rich.md |
| Infinite loading | demo/infinite.md |
| Horizontal scrolling | demo/horizontal.md |
| Custom semantic classes and styles | demo/style-class.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| items | Data source | `any[]` | `[]` |
| rowKey | Unique key of an item: a field name or a getter | `string \| (item, index: number) => Key` | - |
| itemRender | Renders a row; the same-named slot wins | `(item, index: number) => VNodeChild` | - |
| group | Group config, see [Group](#group) | `ListyGroup` | - |
| sticky | Whether the group header sticks to the top | `boolean` | `false` |
| height | Max height of the scroll container, the list scrolls once the content is taller. Numbers are px, strings are CSS lengths (e.g. `'60vh'`) | `number \| string` | - |
| virtual | Virtual scrolling: only the rows around the visible area are rendered. `false` renders every row with the same DOM structure and behaviour | `boolean` | `true` |
| scrollWidth | Width of the content in px; the list scrolls horizontally when it is wider than the container | `number` | - |
| rowHoverable | Press feedback on rows (plus hover feedback on devices that can hover) | `boolean` | `true` |
| itemHeight | Estimated row height in px, used for the placeholder and scrollbar before a row is measured | `number` | `46` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic class names, see [Semantic DOM](#semantic-dom) | `ListyClassNames` | - |
| styles | Semantic styles, see [Semantic DOM](#semantic-dom) | `ListyStyles` | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| scroll | Native scroll event of the scroll container | `(event: Event)` |
| reachEnd | Fired once when the list is scrolled within 40px of its end (again after leaving and re-entering; reset when the data length changes), the hook for loading more | - |

### Slots

| Slot | Description | Props |
| --- | --- | --- |
| itemRender | Renders a row, wins over the `itemRender` prop. The slot props are the item itself: `#itemRender="item"` | `item` |
| groupTitle | Renders a group header, wins over `group.title` | `{ groupKey: Key, items: any[] }` |

### Group

| Property | Description | Type |
| --- | --- | --- |
| key | Group key of an item; items with the same key form one group (groups are ordered by first appearance). May also be one fixed key | `(item) => Key \| Key` |
| title | Renders the group header from the group key and the items of the group; the group key is shown by default | `(groupKey: Key, items: any[]) => VNodeChild` |

Pass a stable `group` object (defined in `<script setup>`), not an inline one in the template: a new object regroups the whole list.

### Methods

| Name | Description | Type |
| --- | --- | --- |
| scrollTo | Scroll to a position, an item or a group | `(config?: ListyScrollToConfig) => void` |

`ListyScrollToConfig` is one of:

| Shape | Description |
| --- | --- |
| `number` | Scroll to a pixel position (`scrollTop`) |
| `{ top?, left? }` | Scroll to absolute pixel coordinates |
| `{ key, align?, offset? }` | Scroll to the item whose `rowKey` equals `key` |
| `{ groupKey, align?, offset? }` | Scroll to a group header |

`align` is `'top' \| 'bottom' \| 'auto'`, `'auto'` by default (no scrolling when the target is in view, otherwise the nearest edge); `offset` is the extra distance in px kept after aligning. With `sticky`, an item aligned to the top stops below the pinned header.

## Semantic DOM

| Name | Description |
| --- | --- |
| root | Root element, the scroll container, with font and max height |
| item | Item element, with padding, split line and press background |
| groupHeader | Group header element (applied to the inline and the pinned header), with padding, text color and background |

## Design Token

Customize through `theme.components.Listy` of `ConfigProvider` (e.g. `{ itemPaddingBlock: 8 }`) or by overriding the CSS variables.

| Variable | Description | Default |
| --- | --- | --- |
| `--am-listy-item-padding-block` | Vertical padding of an item | `var(--am-padding-sm)` |
| `--am-listy-item-padding-inline` | Horizontal padding of items and group headers | `var(--am-padding)` |
| `--am-listy-item-border-color` | Color of the split line | `var(--am-color-split)` |
| `--am-listy-item-active-bg` | Background of a pressed item | `var(--am-color-fill-tertiary)` |
| `--am-listy-group-header-padding-block` | Vertical padding of a group header | `var(--am-padding-xs)` |
| `--am-listy-group-header-color` | Text color of a group header | `var(--am-color-text-description)` |
| `--am-listy-group-header-font-weight` | Font weight of a group header | `var(--am-font-weight-strong)` |
| `--am-listy-group-header-bg` | Opaque base color of a group header | `var(--am-color-bg-container)` |
| `--am-listy-group-header-fill` | Fill color layered over the base color | `var(--am-color-fill-alter)` |
| `--am-listy-group-header-z-index` | Stacking order of the pinned header | `1` |

After changing the padding or font size, adjust `itemHeight` too (default `46` = line height `22` + vertical padding `12 × 2`) so the estimate stays close to the real row height.

## Differences from PC

- **Built on the [VirtualList](../virtual-list/docs.md) of this library**, not on `@v-c/listy`. Scrolling is native (momentum, rubber band) without a custom scrollbar, so `--vc-virtual-list-scrollbar-bg` and the `*-scrollbar` styles do not exist.
- `virtual` defaults to `true` (`false` on PC) and the `virtual` config of `ConfigProvider` is not read. With `virtual: false` the DOM structure is exactly the one of virtual mode (PC renders a different structure with `*-group-section`, and `scrollWidth` has no effect there); sticky headers, `scrollTo` and `scrollWidth` behave the same in both modes.
- The root element is the scroll container (in virtual mode PC scrolls an inner `*-holder`); `currentTarget` of the `scroll` event is always the root.
- The pinned header lives in a zero-height `sticky` layer inside the scroll container, so swiping on it scrolls the list as well; its position is computed from the rendered DOM. It scrolls horizontally with the content naturally (PC syncs it with `translateX`).
- `rowHoverable` means press (`:active`) feedback on mobile; the hover effect is kept only on devices that can hover.
- `height` also accepts a CSS length string.
- New `itemHeight` (estimated row height): PC derives it from the theme token, which is not readable from script here because theming is pure CSS variables.
- New `reachEnd` event for loading more (PC computes it in `scroll` by hand).
- New `groupTitle` slot; `group.title` becomes optional (the group key is shown by default).
- `scrollTo` with `align: 'auto'` is aware of the pinned header when `sticky` is on: a row hidden behind the header is moved below it (PC only handles targets above the viewport). `scrollTo(null)` / `scrollTo()` do nothing.
- `classes` / `styles` only accept objects, not functions; the `listy` config of `ConfigProvider` is not supported; `prefixCls` is dropped.
- The type `ScrollAlign` is renamed to `ListyScrollAlign` (every exported type of this library carries the component prefix); `ListyGroup` and `ListyRowKey` are new.
- No "drag sorting" demo (PC builds it with the third-party `@dnd-kit/vue`).
