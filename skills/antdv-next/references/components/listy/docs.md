---
title: Listy
description: A high-performance list that supports grouping and can virtualize long data sets.
---

## When To Use

- When you need to render a long list without paying the cost of mounting every row — enable `virtual` to render only the rows in view.
- When the list needs grouped sections with sticky headers.
- When you need imperative control over scroll position (jump to an item, a group, or a pixel offset).

## Examples

<!-- prettier-ignore -->

## Demos

| Demo | Path |
| --- | --- |
| Basic | demo/basic.md |
| Disable row hover | demo/row-hoverable-debug.md |
| Virtual scrolling | demo/virtual.md |
| Horizontal scrolling | demo/horizontal.md |
| Grouping and sticky headers | demo/group.md |
| Scroll control | demo/scroll-to.md |
| Rich content | demo/rich.md |
| Drag sorting | demo/drag-sorting.md |
| Infinite loading | demo/infinite.md |
| Custom semantic dom styling | demo/style-class.md |

## API

Common props ref: [Common props](../../docs/vue/common-props.md)

| Property | Description | Type | Default | Version | [Global Config](../config-provider/docs.md#component-config) |
| --- | --- | --- | --- | --- | --- |
| group | Grouping config, see [Group](#group) below | `Group<T, K>` | - | 1.5.0 | × |
| height | Height of the scroll container; content scrolls when it overflows | number | - | 1.5.0 | × |
| itemRender | Render a single row | `(item: T, index: number) => VNode` | - | 1.5.0 | × |
| items | Data source of the list | `T[]` | `[]` | 1.5.0 | × |
| rowHoverable | Whether rows are hoverable | boolean | true | 1.7.0 | × |
| rowKey | Unique key of an item, a field name or a getter | `keyof T \| (item: T, index: number) => Key` | - | 1.5.0 | × |
| scrollWidth | Horizontal scroll width of the content; scrolls horizontally when it exceeds the container, only works with `virtual` | number | - | 1.8.0 | × |
| sticky | Whether group headers stick to the top | boolean | false | 1.5.0 | × |
| virtual | Whether to enable virtual scrolling, rendering only rows in view, requires `height` | boolean | false | 1.5.0 | × |

### Events 
| Event | Description | Type | Version |
| --- | --- | --- | --- |
| scroll | Native scroll event handler | `(e: Event) => void` | - |

### Slots 
| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| itemRender | Render a single row | (item: any, index: number) => any | - |

### Group

| Property | Description | Type |
| --- | --- | --- |
| key | Compute the group key an item belongs to; items with the same key are grouped together | `(item: T) => K` |
| title | Render the group header; receives the group key and its items | `(groupKey: K, items: T[]) => VNode` |

### Ref

| Name     | Description                               | Type                                |
| -------- | ----------------------------------------- | ----------------------------------- |
| scrollTo | Scroll to a position, an item, or a group | `(config?: ListyScrollToConfig) => void` |

`ListyScrollToConfig` is one of:

| Shape                           | Description                                     |
| ------------------------------- | ----------------------------------------------- |
| number                          | Scroll to a pixel offset (scrollTop)            |
| `{ top?, left? }`               | Scroll to an absolute pixel position            |
| `{ key, align?, offset? }`      | Scroll to the item whose `rowKey` matches `key` |
| `{ groupKey, align?, offset? }` | Scroll to a group header                        |

`align` is `'top' | 'bottom' | 'auto'`; `offset` is an extra pixel offset applied after alignment.

## Semantic DOM

| _semantic | demo/_semantic.md |
