---
title: Masonry
description: A masonry layout component for displaying content with different heights.
---

## When To Use

- When displaying images or cards with irregular heights, e.g. product feeds, content feeds, albums.
- When the content has to be distributed evenly over columns of roughly the same height.
- When the content is appended page by page, together with [InfiniteScroll](../infinite-scroll/docs.md).

## Examples

| Demo | Path |
| --- | --- |
| Basic | demo/basic.md |
| Image | demo/image.md |
| Dynamic | demo/dynamic.md |
| Load more on scroll | demo/infinite-scroll.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| items | Masonry items, see [MasonryItemType](#masonry-item-type) | `MasonryItemType[]` | - |
| columns | Number of columns | `number` | `2` |
| gutter | Spacing between items. Numbers are px, strings are CSS lengths; `[horizontal, vertical]` for both directions, a missing or `0` vertical value equals the horizontal one | `number \| string \| [number \| string, number \| string]` | `--am-masonry-gutter` (`8px`) |
| itemRender | Custom item rendering; the same-named slot wins | `(itemInfo: MasonryItemType & { index: number; column: number }) => VNodeChild` | - |
| fresh | Keep observing the size of every item and re-layout when one changes (for content whose height changes outside of loading) | `boolean` | `false` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic class names: `root` / `item` | `MasonrySemanticClassNames` | - |
| styles | Semantic styles: `root` / `item` | `MasonrySemanticStyles` | - |

### MasonryItemType

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier | `string \| number` | - |
| data | Custom data, handed to `itemRender` | `T` | - |
| height | Known height (px): the item is placed with it before being measured, which avoids jumps on the first screen; the measured height wins afterwards | `number` | - |
| column | Pin the item to a column (starting at `0`); out-of-range values use the nearest column | `number` | - |
| children | Custom content, has priority over `itemRender` | `VueNode` | - |
| class | Class name of the item | `string` | - |
| style | Style of the item | `CSSProperties` | - |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| layoutChange | Fired when every item is placed and the column of an item changed; returns the items with their `column` | `(sortInfo: MasonryLayoutInfo[])`, i.e. `(MasonryItemType & { column: number })[]` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| itemRender | Custom item rendering, wins over the `itemRender` prop | `MasonryItemType & { index: number; column: number }` |

### Methods

| Name | Description | Type |
| --- | --- | --- |
| nativeElement | The root element | `HTMLDivElement` |
| layout | Measure and lay out again (e.g. after a font or theme change) | `() => void` |

### Layout notes

- Items are visited in data order and each one goes to the currently shortest column (the first one on a tie) or to its `column`; the DOM order always equals the data order.
- Heights are measured: when `items` / `columns` / `gutter` change, when the container is resized and when an image or another resource inside fires `load` / `error`. All requests of a frame are merged into one pass. For height changes at other moments (expand / collapse, async content) turn on `fresh` or call `layout()`.
- Items that are not measured yet render transparent and fade in once placed; later moves are transitioned with `transform`, which is disabled under `prefers-reduced-motion`.
- Virtual scrolling is not included: every item is rendered, which is fine for up to a few hundred items; paginate and cap the total for larger data sets.

## Design Token

Customize through `theme.components.Masonry` of `ConfigProvider` or by overriding the CSS variables.

| Variable | Description | Default |
| --- | --- | --- |
| `--am-masonry-gutter` | Default spacing (used when `gutter` is not set) | `var(--am-margin-xs)` |
| `--am-masonry-gutter-x` | Horizontal spacing, written by the `gutter` prop | `var(--am-masonry-gutter)` |
| `--am-masonry-gutter-y` | Vertical spacing, written by the `gutter` prop | `var(--am-masonry-gutter-x)` |
| `--am-masonry-columns` | Number of columns, written by the `columns` prop | `2` |
| `--am-masonry-motion-duration` | Duration of the fade-in and the move transition | `var(--am-motion-duration-slow)` |
| `--am-masonry-motion-ease` | Easing of the transitions | `var(--am-motion-ease-out)` |

## Differences from PC

- `columns` only accepts a number, not the responsive `{ xs, sm, md ... }` breakpoint object, and defaults to `2` (`3` on PC). Mobile viewports have a single width; compute the column count yourself (e.g. with `useWindowSize()`) to adapt to tablets.
- `gutter` does not accept breakpoint objects; it additionally accepts CSS length strings (e.g. `'0.5rem'`); its default comes from the `--am-masonry-gutter` token (`8px`), `0` on PC.
- `classes` / `styles` only accept objects, not functions.
- The `itemRender` params match what PC really passes (including `index` and `column`), and `column` is declared in the type.
- `items[].height` takes part in the layout: items with a known height are placed before being measured (PC declares the field but does not use it).
- `layoutChange` only fires when the column of an item changes (PC also fires when any field of `items` changes); every returned item always carries its `key`.
- Positions are applied with CSS variables + `transform` and are transitioned (PC uses `top` / `inset-inline-start`); new items fade in, removed items disappear at once, there is no leave motion.
- Adds the `layout()` method for a manual re-layout and the `--am-masonry-*` design tokens (PC has no component tokens).
- Does not depend on `@v-c/resize-observer`, the native `ResizeObserver` is used; without it the layout still runs on data changes and resource loads.
