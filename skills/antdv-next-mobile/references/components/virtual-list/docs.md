---
title: VirtualList
description: Renders only the list items near the visible area, so even tens of thousands of rows scroll smoothly.
---

## When To Use

- When you need to display hundreds or thousands of rows with the same structure in one scroll area: messages, contacts, logs, search results, etc.
- When the item height is fixed (`fixed`, the cheapest) or determined by the content (default, measured automatically after rendering).
- When you need to scroll to a specific item (`scrollTo`) or load more when scrolled to the bottom (`reachEnd`).

`VirtualList` uses native scrolling (momentum, bounce and scrollbars are all handled by the browser) and only mounts the items near the visible area to the page. It is also a base layer inside the component library: large data rendering in [Select](../select/docs.md), [Cascader](../cascader/docs.md) and [List](../list/docs.md) all goes through it.

## Examples

| Demo | Path |
| --- | --- |
| 10,000 fixed-height rows | demo/basic.md |
| Dynamic height | demo/dynamic.md |
| Scroll to an item | demo/scroll-to.md |
| Load more on scroll | demo/load-more.md |
| Inside a popup | demo/popup.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| data | The full data source | `any[]` | `[]` |
| height | Height of the scroll container. When not set, the container grows with its content, in which case set `height` / `max-height` through CSS | `number \| string` | - |
| itemHeight | Item height (px). The exact height when `fixed`, otherwise the estimated height before measuring | `number` | `44` |
| itemKey | Field name of the unique `key` of an item, or a function that returns the `key` | `string \| ((item: any, index: number) => string \| number)` | Index |
| virtual | Whether to enable virtual scrolling. Renders all items when `false`, the DOM structure and API stay the same | `boolean` | `true` |
| fixed | All items have a height equal to `itemHeight`: measuring is skipped, the cheapest mode | `boolean` | `false` |
| overscan | Number of extra items rendered before and after the visible area | `number` | `4` |
| component | Tag of the inner element that wraps the items | `string` | `'div'` |
| rootClass | Class name of the root element (scroll container) | `string` | - |
| classes | Semantic class names | `Record<'root' \| 'holder' \| 'list' \| 'item', string>` | - |
| styles | Semantic styles | `Record<'root' \| 'holder' \| 'list' \| 'item', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| scroll | Triggered on scroll | `(event: Event) => void` |
| visibleChange | Triggered when the render window changes, the range is `[start, end)` | `(start: number, end: number) => void` |
| reachEnd | Triggered once when scrolled to within 40px of the bottom; can be triggered again after leaving the bottom or when the data length changes, suitable for loading more | `() => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Item content | `{ item: any, index: number }` |
| header | Content inside the scroll container before the items, scrolls together with the list | - |
| footer | Content inside the scroll container after the items, e.g. "Loading" or "No more data" | - |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| scrollTo | Scroll to a position (px), or to a specific item | `(target: number \| VirtualListScrollToConfig) => void` |
| getScrollTop | Get the current scroll position | `() => number` |
| nativeElement | The scroll container element | `HTMLElement` |

### VirtualListScrollToConfig

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| index | Index of the target item | `number` | - |
| key | The `key` of the target item (determined by `itemKey`), use either this or `index` | `string \| number` | - |
| align | Position of the target item in the visible area; `auto` does not scroll when the item is already fully visible, otherwise scrolls the shortest distance | `'start' \| 'center' \| 'end' \| 'auto'` | `'start'` |
| offset | Extra distance kept from the target item (px) | `number` | `0` |
| behavior | Scroll behavior, `smooth` for smooth scrolling | `ScrollBehavior` | - |

## Design Token

VirtualList is only responsible for scrolling and the render window and has no design tokens of its own. The appearance is determined by the content of the items; the size, background, etc. of the scroll container can be set through `class` / `style`, `rootClass`, `classes` and `styles`.

| Part | Class name | Description |
| --- | --- | --- |
| root | `.am-virtual-list` | Scroll container |
| holder | `.am-virtual-list-holder` | Placeholder layer that takes up the height of all the data |
| list | `.am-virtual-list-inner` | Inner layer that wraps the rendered items, positioned with `transform` |
| item | `.am-virtual-list-item` | Wrapper element of a single item, carries `data-index` |

## Differences from PC

- There is no public VirtualList component on PC, where virtual scrolling is built into components such as `Select`, `Tree` and `Table`; on mobile it is exposed as a public base component and follows the PC naming: `data`, `height`, `itemHeight`, `itemKey`, `virtual`, `scrollTo({ index \| key, align })`.
- Native browser scrolling is used instead of a simulated scrollbar, keeping the momentum and bounce of mobile; therefore there are no APIs such as `fullHeight`, `showScrollBar` and `scrollWidth` (horizontal virtual scrolling).
- The item height is measured after rendering by default (`itemHeight` is only an estimate); `fixed` is added to skip measuring, `overscan` to control the number of buffer items, along with the `header` / `footer` slots and the `reachEnd` and `visibleChange` events.
- Items are wrapped in `.am-virtual-list-item`, so styles that rely on sibling selectors (such as dividers between adjacent items) should target the wrapper element or `data-index`.
