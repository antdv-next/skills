---
title: FloatingPanel
description: A panel that floats at the bottom of the page, can be dragged up and down, and snaps to anchor heights.
---

## When To Use

- On pages such as maps and navigation, to show expandable details such as a list of places or route information without leaving the main content.
- A bottom panel that lets the user drag freely between "peeking / half expanded / fully expanded".

Unlike [Popup](../popup/docs.md), the floating panel has no mask and stays on the page, so it does not block interaction with the content behind it.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Custom anchors and controlled height | demo/anchors.md |
| Draggable by the header only | demo/header-only.md |
| Set the height through methods | demo/methods.md |

> For demonstration in the documentation page, the examples all set `:fixed="false"` so that the panel is positioned inside a box with `position: relative; overflow: hidden`. In real use, keep the default `fixed` to fix it at the bottom of the viewport.

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| height | The currently exposed height of the panel (px), supports `v-model:height` | `number` | `anchors[0]` |
| anchors | List of heights (px) the panel can snap to | `number[]` | `[100, viewport height * 0.6]` |
| contentDraggable | Whether dragging the content area moves the panel; once the panel is fully expanded the content area becomes scrollable, and pulling down further after scrolling back to the top collapses the panel | `boolean` | `true` |
| duration | Duration of the snap animation (ms) | `number` | `300` |
| safeArea | Whether to reserve padding for the bottom safe area | `boolean` | `true` |
| lockScroll | Whether to lock page scrolling. By default it is locked only while dragging | `boolean` | `false` |
| fixed | Whether to fix the panel at the bottom of the viewport. When `false`, it is absolutely positioned relative to the nearest positioned ancestor, and the default anchors are also calculated from the height of that element | `boolean` | `true` |
| zIndex | z-index | `number` | `999` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic class names | `Record<'root' \| 'header' \| 'content', string>` | - |
| styles | Semantic styles | `Record<'root' \| 'header' \| 'content', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| heightChange | Triggered when the height changes: `animating` is `false` while dragging, and `true` when snapping after release or when set through a method | `(height: number, info: { animating: boolean }) => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | Panel content |
| header | Custom header, replaces the default drag bar |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| setHeight | Set the panel height, no animation is used when `immediate` is `true` | `(height: number, options?: { immediate?: boolean }) => void` |

## Design Token

Customize through `theme.components.FloatingPanel` of `ConfigProvider`, or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-floating-panel-z-index` | z-index, the `zIndex` prop takes precedence | `999` |
| `--am-floating-panel-bg` | Background color | `var(--am-color-bg-elevated)` |
| `--am-floating-panel-border-radius` | Top border radius | `var(--am-border-radius-xl)` |
| `--am-floating-panel-header-height` | Header height | `30px` |
| `--am-floating-panel-bar-width` | Drag bar width | `32px` |
| `--am-floating-panel-bar-height` | Drag bar height | `4px` |
| `--am-floating-panel-bar-color` | Drag bar color | `var(--am-color-fill)` |
| `--am-floating-panel-shadow` | Shadow | `var(--am-box-shadow)` |

## FAQ

### What is the total height of the panel?

The height of the panel element equals the largest anchor, and only the `height` part is exposed through translation; dragging beyond the first or last anchor is damped and bounces back after release. Therefore the scrollable height of the content area is calculated from the largest anchor.

### Why doesn't the panel snap to the nearest anchor after a quick swipe?

When the velocity at release exceeds a threshold, it is treated as a "fling", and the panel moves to the next anchor in that direction instead of the nearest one.
