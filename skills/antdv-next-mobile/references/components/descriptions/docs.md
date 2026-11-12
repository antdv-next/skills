---
title: Descriptions
description: Display multiple read-only fields in a group.
---

## When To Use

Commonly used to display information on detail pages, such as order details, personal profiles and bill details.

The API is aligned with `Descriptions` of antdv-next: fields are configured through `items`, and `title`, `extra`, `column`, `layout`, `bordered`, `size` and `colon` are supported. On mobile, each row has one column by default.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Content aligned to the end | demo/align.md |
| Multiple columns and span | demo/column.md |
| Bordered | demo/bordered.md |
| Vertical layout | demo/vertical.md |
| Size | demo/size.md |
| Custom render | demo/render.md |
| Semantic class names and component tokens | demo/style-class.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | The title of the description list, placed at the top, the same-named slot takes precedence | `VueNode` | - |
| extra | The action area of the description list, placed at the top-right, the same-named slot takes precedence | `VueNode` | - |
| items | Description list items | `DescriptionsItemType[]` | - |
| column | The number of items in a row | `number` | `1` |
| layout | Layout of the descriptions | `'horizontal' \| 'vertical'` | `'horizontal'` |
| bordered | Whether to display the border | `boolean` | `false` |
| size | Size of the list | `'small' \| 'middle' \| 'large'` | `'middle'` |
| colon | Whether to show the colon after the label (not shown when `bordered`) | `boolean` | `true` |
| contentAlign | Alignment of the content in horizontal layout, `end` aligns the content to the right, like a list cell | `'start' \| 'end'` | `'start'` |
| labelRender | Customize the rendering of all labels, the same-named slot takes precedence | `(params: { item, index, value }) => VNodeChild` | - |
| contentRender | Customize the rendering of all contents, the same-named slot takes precedence | `(params: { item, index, value }) => VNodeChild` | - |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'header' \| 'title' \| 'extra' \| 'label' \| 'content', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'header' \| 'title' \| 'extra' \| 'label' \| 'content', CSSProperties>` | - |

### DescriptionsItemType

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier | `string \| number` | index |
| label | The description of the content | `VueNode` | - |
| content | The content | `VueNode` | - |
| span | The number of columns occupied, `'filled'` takes up the remaining columns of the current row | `number \| 'filled'` | `1` |
| class | Class name of the item | `string` | - |
| style | Style of the item | `CSSProperties` | - |
| classes | Semantic class names of the item | `Record<'label' \| 'content', string>` | - |
| styles | Semantic styles of the item | `Record<'label' \| 'content', CSSProperties>` | - |
| children | Deprecated, please use `content` | `VueNode` | - |

Every row is filled automatically: an item which does not fit in a row wraps to the next one and the last item of the previous row is stretched; the last item always takes up the remaining columns.

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| title | Title | - |
| extra | Action area | - |
| labelRender | Customize all labels | `{ item: DescriptionsItemType, index: number, value: any }` |
| contentRender | Customize all contents | `{ item: DescriptionsItemType, index: number, value: any }` |

## Design Token

Customize through `theme.components.Descriptions` of `ConfigProvider`, or override the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-descriptions-title-color` | Title color | `var(--am-color-text-heading)` |
| `--am-descriptions-title-font-size` | Title font size | `var(--am-font-size-lg)` |
| `--am-descriptions-title-margin-bottom` | Bottom margin of the title | `var(--am-margin-sm)` |
| `--am-descriptions-label-color` | Label color | `var(--am-color-text-tertiary)` |
| `--am-descriptions-content-color` | Content color | `var(--am-color-text)` |
| `--am-descriptions-font-size` | Font size | `var(--am-font-size)` |
| `--am-descriptions-item-padding-bottom` | Bottom padding of items | `var(--am-padding-sm)` |
| `--am-descriptions-column-gap` | Gap between columns | `var(--am-margin)` |
| `--am-descriptions-colon-margin-end` | Gap between the colon and the content | `8px` |
| `--am-descriptions-label-width` | Label width in bordered horizontal layout | `30%` |
| `--am-descriptions-label-bg` | Label background color when bordered | `var(--am-color-fill-alter)` |
| `--am-descriptions-border-color` | Border color | `var(--am-color-border-secondary)` |
| `--am-descriptions-border-radius` | Border radius when bordered | `var(--am-border-radius)` |
| `--am-descriptions-cell-padding` | Cell padding when bordered | `var(--am-padding-sm) var(--am-padding)` |

## Differences from PC

- `column` defaults to `1` (`3` on PC) and only accepts a number, responsive breakpoint objects are not supported; the same applies to `span`.
- Only the data-driven `items` is supported, the `Descriptions.Item` sub component is not provided.
- Added `contentAlign` for the "label on the left, content on the right" layout common on mobile detail pages.
- Rendered with CSS Grid instead of `<table>`; in bordered horizontal layout the label width is controlled by `--am-descriptions-label-width`.
