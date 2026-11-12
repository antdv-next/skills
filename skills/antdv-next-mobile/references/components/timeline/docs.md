---
title: Timeline
description: Vertical display timeline.
---

## When To Use

- When a series of information needs to be ordered by time (ascending or descending).
- When you need a timeline to make a visual connection, such as logistics tracking, approval flows and operation records.

The API is aligned with `Timeline` of antdv-next: nodes are configured through `items`, `title` is shown on the other side of the timeline, and `content` is the content of the node.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Color and variant | demo/color.md |
| Title | demo/title.md |
| Custom dot | demo/icon.md |
| Last node and order | demo/pending.md |
| Alternate | demo/alternate.md |
| Dot on the other side | demo/end.md |
| Logistics tracking | demo/logistics.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| items | Configuration of the timeline nodes | `TimelineItemType[]` | - |
| mode | Relative position of the timeline and the content | `'start' \| 'alternate' \| 'end'` | `'start'` |
| reverse | Whether to reverse the order of the nodes | `boolean` | `false` |
| pending | Whether the last ghost node exists, or its content, the same-named slot takes precedence | `VueNode` | `false` |
| pendingDot | Dot of the ghost node, the same-named slot takes precedence | `VueNode` | `<LoadingOutlined />` |
| variant | Variant of the dots | `'outlined' \| 'filled'` | `'outlined'` |
| titleSpan | Width of the title column (takes effect when `mode` is not `alternate`): a number is the share of a 24-column grid, a string is any CSS width | `number \| string` | `6` (25%) |
| dotRender | Customize the dot of every node, the same-named slot takes precedence | `(params: { item, index }) => VNodeChild` | - |
| labelRender | Customize the title of every node, the same-named slot takes precedence | `(params: { item, index }) => VNodeChild` | - |
| contentRender | Customize the content of every node, the same-named slot takes precedence | `(params: { item, index }) => VNodeChild` | - |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'item' \| 'itemTitle' \| 'itemRail' \| 'itemIcon' \| 'itemContent', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'item' \| 'itemTitle' \| 'itemRail' \| 'itemIcon' \| 'itemContent', CSSProperties>` | - |

### TimelineItemType

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier | `string \| number` | Index |
| title | Title, shown on the other side of the timeline (such as a time) | `VueNode` | - |
| content | Content of the node | `VueNode` | - |
| color | Color of the circle: `blue`, `red`, `green`, `gray` or a custom color value | `string` | `'blue'` |
| icon | Custom dot | `VueNode` | - |
| loading | Whether to show a loading dot | `boolean` | `false` |
| placement | Customize the position of this node's content | `'start' \| 'end'` | - |
| class | Class name of the node | `string` | - |
| style | Style of the node | `CSSProperties` | - |
| label | Deprecated, use `title` instead | `VueNode` | - |
| children | Deprecated, use `content` instead | `VueNode` | - |
| dot | Deprecated, use `icon` instead | `VueNode` | - |
| position | Deprecated, use `placement` instead | `'left' \| 'right' \| 'start' \| 'end'` | - |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| dotRender | Customize the dot of every node | `{ item: TimelineItemType, index: number }` |
| labelRender | Customize the title of every node | `{ item: TimelineItemType, index: number }` |
| contentRender | Customize the content of every node | `{ item: TimelineItemType, index: number }` |
| pending | Content of the ghost node | - |
| pendingDot | Dot of the ghost node | - |

## Design Token

Customize through `theme.components.Timeline` of `ConfigProvider`, or override the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-timeline-dot-size` | Size of the dot | `10px` |
| `--am-timeline-dot-border-width` | Border width of the dot | `2px` |
| `--am-timeline-dot-bg` | Background color of `outlined` dots | `var(--am-color-bg-container)` |
| `--am-timeline-icon-size` | Size of custom icons | `16px` |
| `--am-timeline-rail-width` | Width of the timeline column | `20px` |
| `--am-timeline-tail-width` | Width of the connecting line | `2px` |
| `--am-timeline-tail-color` | Color of the connecting line | `var(--am-color-border)` |
| `--am-timeline-item-gap` | Gap between the timeline and the content | `var(--am-margin-sm)` |
| `--am-timeline-item-padding-bottom` | Gap between nodes | `var(--am-padding-md)` |
| `--am-timeline-title-color` | Color of the title | `var(--am-color-text-secondary)` |
| `--am-timeline-title-span` | Width of the title column | `25%` |
| `--am-timeline-font-size` | Font size | `var(--am-font-size)` |
| `--am-timeline-item-color` | Main color of the node (changes with `color`) | `var(--am-color-primary)` |

## Differences from PC

- Only the vertical direction is supported, `orientation="horizontal"` is not.
- Only the data-driven `items` is supported, the `Timeline.Item` sub component is not provided.
- `titleSpan` defaults to 25% (50% on PC) to leave more room for content on narrow screens.
- Node-level `classes` / `styles` are not supported, use the `class` / `style` of the node or the component-level semantic structure instead.
- `left` / `right` of `mode` are kept as aliases of `start` / `end`.
