---
title: Affix
description: Stick an element to the viewport.
---

## When To Use

- When the content is long and the page has to scroll, pin a filter bar, a section title, action buttons, etc. to the top or bottom of the screen.
- When you need to be notified as the element becomes affixed / unaffixed (the `change` event), e.g. to switch its style once it is sticky.

The API is the same as `Affix` in antdv-next: `offsetTop`, `offsetBottom`, `target`, `change`. While affixed, a placeholder of the same size is kept at the original position so the page layout does not jump; the position is recalculated automatically when the container is resized or the screen is rotated.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Affix to the bottom | demo/bottom.md |
| Callback on affix state change | demo/change.md |
| Sticky group titles | demo/sticky-header.md |

> To demonstrate them inside the documentation page, the examples are all placed in a fixed-height scroll container which is specified through `target`. When the whole page scrolls in a real application, `target` is not needed.

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| offsetTop | Offset from the top of the window (or `target`) at which the element becomes affixed | `number` | `0` |
| offsetBottom | Offset from the bottom of the window (or `target`) at which the element becomes affixed | `number` | - |
| target | The element whose scroll event `Affix` listens to, as a function returning that DOM element | `() => Window \| HTMLElement \| null` | `() => window` |
| zIndex | The z-index while affixed | `number` | `10` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'affix', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'affix', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the affix state changes | `(affixed: boolean) => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | The content to affix |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| updatePosition | Recalculate the position (call it manually after the content size has been changed asynchronously from outside) | `() => void` |

**Note:** Do not use absolute positioning for the elements inside `Affix`. If you need that effect, set `Affix` itself to absolute positioning:

```html
<am-affix style="position: absolute; top: y; left: x">...</am-affix>
```

## Design Token

| Token | Description | Default |
| --- | --- | --- |
| `--am-affix-z-index` | The z-index while affixed; the `zIndex` prop takes precedence | `10` |

## Differences from PC

- Adds the `zIndex` prop (on mobile it often has to cover list content or yield to a navigation bar).
- When a container is specified through `target`, page scrolling is listened to in addition to the container's own scrolling, so the affixed element follows the container as it moves with the page.
- All other props, events and methods are the same as PC.

## FAQ

### Do I have to use Affix when all I need is a simple sticky header?

No. For purely presentational sticky content prefer the native `position: sticky`, which performs better. Use `Affix` when you need to know the affix state, affix to the bottom, or when an ancestor sets `overflow` and breaks `sticky`.

### The affixed element has no background and the content shows through?

The affixed element floats above the content, so set a background color on the slot content.
