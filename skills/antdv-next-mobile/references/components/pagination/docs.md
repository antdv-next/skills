---
title: Pagination
description: A pagination control that splits a long list into pages and loads only one page at a time.
---

## When To Use

- When it will take a long time to load / render all items.
- When users should clearly know where they are and be able to jump to a given page, instead of infinite scrolling.

The API is aligned with `Pagination` of Antdv Next (`current`, `total`, `pageSize`, `simple`, `showTotal`, `itemRender`, etc.), and the UI is simplified for narrow screens.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| More pages | demo/more.md |
| Simple mode | demo/simple.md |
| Show total | demo/total.md |
| Size and disabled | demo/size.md |
| Custom rendering | demo/item-render.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| current(v-model) | Current page number | `number` | - |
| defaultCurrent | Default current page number | `number` | `1` |
| total | Total number of data items | `number` | `0` |
| pageSize | Number of data items per page | `number` | `10` |
| simple | Simple mode: previous / next buttons with `current page / total pages` in the middle | `boolean` | `false` |
| disabled | Disable pagination | `boolean` | `false` |
| size | Size | `'small' \| 'middle' \| 'large'` | `'middle'` |
| showLessItems | Show fewer page items (the pages adjacent to the current page are not shown) | `boolean` | `false` |
| hideOnSinglePage | Whether to hide the pager when there is only one page | `boolean` | `false` |
| showTotal | To display the total number and the current range | `(total: number, range: [number, number]) => VueNode` | - |
| itemRender | Customize the content of the page items, previous and next | `(page: number, type: 'page' \| 'prev' \| 'next' \| 'jump-prev' \| 'jump-next', element: VueNode) => VueNode` | - |
| prevIcon | Custom previous icon | `VueNode` | - |
| nextIcon | Custom next icon | `VueNode` | - |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'item', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'item', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the page number changes | `(page: number, pageSize: number) => void` |
| update:current | Triggered when the page number changes, used by `v-model:current` | `(page: number) => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| itemRender | Customize the page item content, takes precedence over the `itemRender` prop | `{ page: number, type: 'page' \| 'prev' \| 'next' \| 'jump-prev' \| 'jump-next', element: VueNode }` |
| showTotal | Customize the total display, takes precedence over the `showTotal` prop | `{ total: number, range: [number, number] }` |
| prevIcon | Custom previous icon | - |
| nextIcon | Custom next icon | - |

## Design Token

Customize through `theme.components.Pagination` of `ConfigProvider`, or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-pagination-item-size` | Page item size | `34px` |
| `--am-pagination-item-gap` | Gap between page items | `4px` |
| `--am-pagination-font-size` | Font size | `var(--am-font-size)` |
| `--am-pagination-color` | Text color | `var(--am-color-text)` |
| `--am-pagination-item-background` | Page item background color | `transparent` |
| `--am-pagination-item-active-color` | Text color of the current page | `var(--am-color-text-light-solid)` |
| `--am-pagination-item-active-background` | Background color of the current page | `var(--am-color-primary)` |
| `--am-pagination-item-border-radius` | Page item border radius | `var(--am-border-radius)` |
| `--am-pagination-simple-button-background` | Button background color in simple mode | `var(--am-color-fill-tertiary)` |
| `--am-pagination-simple-button-padding-inline` | Horizontal padding of the buttons in simple mode | `var(--am-padding)` |

## Differences from PC

- At most 7 page items are shown at once (including ellipses); tapping an ellipsis jumps 5 pages backward / forward (3 pages with `showLessItems`).
- The `simple` mode is a button layout of "previous / current page / total pages / next"; the texts come from `locale.Pagination`, and there is no input for jumping to a page.
- `showSizeChanger`, `pageSizeOptions`, `showQuickJumper`, `showTitle`, `responsive`, `align`, `components` and the `showSizeChange` and `update:pageSize` events are not supported.
- `jumpPrevIcon` / `jumpNextIcon` and `defaultPageSize` are not supported; the current page uses a solid style and there is no hover state.
