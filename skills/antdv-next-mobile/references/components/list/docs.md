---
title: List
description: A general-purpose list that neatly holds text, icons, actions and other content in cells.
---

## When To Use

- Display a group of entries with the same structure: settings, contacts, orders, menu entries, etc.
- Serve as the container of form items, switches, pickers and other components.
- When an entry needs to navigate or trigger an action on tap, it comes with press feedback and an arrow on the right.

`List` is one of the most commonly used layout containers on mobile. It consists of `List` and `List.Item` (`<am-list-item>`), and also supports a data mode with `dataSource` + `renderItem`.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Clickable list | demo/clickable.md |
| Icon, description and extra content | demo/prefix.md |
| Card mode | demo/card.md |
| With other components | demo/control.md |
| Data mode | demo/data.md |
| Large data / virtual scrolling | demo/virtual.md |
| Size and alignment | demo/size.md |
| Custom style | demo/style-class.md |

## API

### List Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| header | List header | `VueNode` | - |
| footer | List footer | `VueNode` | - |
| mode | Display mode, `card` is a card with rounded corners and horizontal margins | `'default' \| 'card'` | `'default'` |
| bordered | Whether to show the hairlines above and below the list (`default` mode only) | `boolean` | `true` |
| size | Size | `'small' \| 'middle' \| 'large'` | `'middle'` |
| dataSource | The data source of the list, used with `renderItem` | `any[]` | - |
| renderItem | Render each item of the data source | `(item: any, index: number) => VueNode` | - |
| rowKey | The `key` of a data item: a field name or a function | `string \| ((item: any, index: number) => string \| number)` | Index |
| loading | Whether loading, shows a loading indicator at the bottom of the list | `boolean` | `false` |
| virtual | Enable virtual scrolling in data mode: items are rendered through [VirtualList](../virtual-list/docs.md) and only the items near the visible area are mounted. When enabled the list scrolls by itself and `height` must be set | `boolean` | `false` |
| height | Height of the scroll area with virtual scrolling | `number \| string` | - |
| itemHeight | Estimated height (px) of an item with virtual scrolling; the actual height is measured after rendering | `number` | Minimum height of an item (`40` / `48` / `56`) |
| locale | Texts, `emptyText` is the hint shown when the data is empty | `{ emptyText?: VueNode }` | - |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'header' \| 'body' \| 'footer', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'header' \| 'body' \| 'footer', CSSProperties>` | - |

### List Events

| Event | Description | Type |
| --- | --- | --- |
| reachEnd | Triggered when scrolling near the bottom of the list with virtual scrolling, used to load more (infinite loading); can be triggered again after the data length changes | `() => void` |

### List Methods

| Method | Description | Type |
| --- | --- | --- |
| scrollTo | With virtual scrolling, scroll to a position (px), or to the item with the given index / `rowKey` | `(target: number \| { index?: number, key?: string \| number, align?: 'start' \| 'center' \| 'end' \| 'auto', offset?: number, behavior?: ScrollBehavior }) => void` |

### List Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | List content, usually several `<am-list-item>` | - |
| header | List header, takes precedence over the `header` prop | - |
| footer | List footer, takes precedence over the `footer` prop | - |
| renderItem | Render each item of the data source, takes precedence over the `renderItem` prop | `{ item: any, index: number }` |
| emptyText | Content shown when the data is empty, takes precedence over `locale.emptyText` | - |

### List.Item Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Main content, same as the default slot | `VueNode` | - |
| description | Description below the main content | `VueNode` | - |
| prefix | Left area, usually an icon or an avatar | `VueNode` | - |
| extra | Right area, usually a value or a status text | `VueNode` | - |
| arrow | Arrow on the right, a custom node can be passed | `boolean \| VueNode` | `true` when clickable |
| clickable | Whether it has press feedback | `boolean` | `true` when the `click` event is listened to or `href` is set |
| disabled | Whether disabled | `boolean` | `false` |
| href | Renders as `<a>` when set | `string` | - |
| target | Same as the `target` of `<a>`, works when `href` is present | `string` | - |
| align | Vertical alignment of the left and right areas relative to the content | `'center' \| 'start'` | `'center'` |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'prefix' \| 'content' \| 'title' \| 'description' \| 'extra' \| 'arrow', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'prefix' \| 'content' \| 'title' \| 'description' \| 'extra' \| 'arrow', CSSProperties>` | - |

### List.Item Events

| Event | Description | Type |
| --- | --- | --- |
| click | Triggered when the item is tapped; not triggered when disabled | `(event: MouseEvent) => void` |

### List.Item Slots

| Slot | Description |
| --- | --- |
| default | Main content, takes precedence over the `title` slot and prop |
| title | Main content |
| description | Description |
| prefix | Left area |
| extra | Right area |
| arrow | Custom arrow on the right |

## Design Token

Customize through `theme.components.List` of `ConfigProvider`, or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-list-background` | List background color | `var(--am-color-bg-container)` |
| `--am-list-font-size` | Item font size | `var(--am-font-size-lg)` |
| `--am-list-border-color` | Hairline color | `var(--am-color-split)` |
| `--am-list-header-color` | Header / footer text color | `var(--am-color-text-tertiary)` |
| `--am-list-header-font-size` | Header / footer font size | `var(--am-font-size)` |
| `--am-list-header-padding` | Header padding | `var(--am-padding-sm) var(--am-padding) var(--am-padding-xs)` |
| `--am-list-card-margin-inline` | Horizontal margin in card mode | `var(--am-margin-sm)` |
| `--am-list-card-border-radius` | Border radius in card mode | `var(--am-border-radius-lg)` |
| `--am-list-item-padding-inline` | Horizontal padding of an item | `var(--am-padding)` |
| `--am-list-item-padding-block` | Vertical padding of an item | `var(--am-padding-sm)` |
| `--am-list-item-min-height` | Minimum height of an item | `48px` |
| `--am-list-item-prefix-gap` | Gap between the left area and the content | `var(--am-padding-sm)` |
| `--am-list-item-description-color` | Description color | `var(--am-color-text-tertiary)` |
| `--am-list-item-description-font-size` | Description font size | `var(--am-font-size)` |
| `--am-list-item-extra-color` | Color of the right area | `var(--am-color-text-tertiary)` |
| `--am-list-item-arrow-color` | Arrow color | `var(--am-color-text-quaternary)` |

## Differences from PC

`List` on PC is no longer recommended. The mobile `List` is a cell list redesigned for touch screens:

- `List.Item` consists of `prefix`, `title` (default slot), `description`, `extra` and `arrow`, and supports `clickable`, `href` and `disabled`; there is no `List.Item.Meta` or `actions`.
- Adds `mode="card"`; `bordered` renders as 0.5px hairlines above and below the list, and the separators between items are always shown and left-aligned with the title (there is no `split`).
- Keeps `dataSource`, `renderItem`, `rowKey`, `loading`, `locale.emptyText`, `header`, `footer` and `size` of the data mode.
- `grid`, `pagination`, `loadMore` and `itemLayout` are not supported; use `Pagination` and `InfiniteScroll` for pagination and loading more.
- The data mode adds `virtual`, `height`, `itemHeight`, the `reachEnd` event and the `scrollTo` method: with tens of thousands of rows only the items near the visible area are rendered. Off by default (a list usually scrolls with the page).
