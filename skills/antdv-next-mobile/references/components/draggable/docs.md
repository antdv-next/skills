---
title: Draggable
description: Lets any content be dragged freely inside the viewport or a container, with axis restriction and edge snapping.
---

## When To Use

- Floating content the user may want to move out of the way: a customer service entry, a red packet widget, a floating player.
- When all you need is a draggable floating button, use `draggable` of [FloatButton](../float-button/docs.md). Both share the same drag logic.

Draggable is a mobile-only component. Its props are named like the drag props of `FloatButton`.

## Examples

| Demo | Path |
| --- | --- |
| Basic | demo/basic.md |
| Axis and magnetic | demo/axis.md |
| Controlled offset, reset and disabled | demo/control.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| axis | Axis the element can be dragged along | `'x' \| 'y' \| 'xy'` | `'xy'` |
| magnetic | Snap to the nearest edge of that axis after release | `'x' \| 'y'` | - |
| offset | Top-left position in px, relative to the viewport, or to the offset parent when positioned absolutely. Supports `v-model:offset` | `{ x: number, y: number }` | - |
| gap | Minimal distance to the edges in px, per side if needed | `number \| { top?: number, right?: number, bottom?: number, left?: number }` | `0` |
| disabled | Whether dragging is disabled | `boolean` | `false` |
| zIndex | Stacking order | `number` | `90` |
| getContainer | Mount node, rendered in place by default | `string \| HTMLElement \| (() => HTMLElement) \| false` | - |
| rootClass | Class name of the root | `string` | - |
| classes | Semantic class names | `Record<'root', string>` | - |
| styles | Semantic styles | `Record<'root', CSSProperties>` | - |

Without `offset` and before the first drag, the element stays where its CSS puts it (`top` / `left` / `right` / `bottom`).

### Events

| Event | Description | Type |
| --- | --- | --- |
| click | Triggered on click, not at the end of a drag | `(event: MouseEvent) => void` |
| update:offset | The position changed after a drag | `(offset: { x: number, y: number }) => void` |
| offsetChange | Triggered after a drag ended (snapping included) | `(offset: { x: number, y: number }) => void` |
| dragStart | Triggered when the finger goes down and a drag starts | `() => void` |
| dragEnd | Triggered when a drag ended | `(offset: { x: number, y: number }) => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | The draggable content | `{ dragging: boolean }` |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| reset | Go back to the initial position | `() => void` |
| resize | Constrain the position again after the container was resized (window resizes are handled automatically) | `() => void` |
| nativeElement | The root element | `HTMLElement` |

### useDraggable

The composable used by the component is exported as well, to add the same drag behaviour to your own element. See [Composables](../../docs/composables.md).

## Design Token

Customize through `theme.components.Draggable` of `ConfigProvider` or by overriding the CSS variables.

| Variable | Description | Default |
| --- | --- | --- |
| `--am-draggable-z-index` | Stacking order | `90` |
| `--am-draggable-transition-duration` | Duration of the snap animation after release | `var(--am-motion-duration-mid)` |

## Differences from PC

- A mobile-only component, antdv-next has no counterpart.
- Works with touch and mouse, which makes debugging in a desktop browser easy.
