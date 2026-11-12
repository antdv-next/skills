---
title: Popup
description: An overlay container that pops up from the edge or the center of the screen, the foundation of all popup components.
---

## When To Use

- When you need an overlay that slides out from the top, bottom, left or right, or pops up in the center, to hold any custom content.
- When you need to build your own popup component: `Drawer`, `Modal`, `ActionSheet`, `Picker`, etc. are all built on Popup, which automatically handles the mask, scroll locking, z-index stacking, `ConfigProvider` theme passthrough and the safe area.

If you need a panel with a title, a close button and a footer, use [Drawer](../drawer/docs.md) directly.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Placement | demo/placement.md |
| Rounded corners and close icon | demo/round.md |
| Mask | demo/mask.md |
| Custom mount node | demo/container.md |
| Semantic class names and component tokens | demo/style-class.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| open | Whether it is visible, supports `v-model:open` | `boolean` | `false` |
| placement | The placement of the popup | `'top' \| 'bottom' \| 'left' \| 'right' \| 'center'` | `'bottom'` |
| mask | Whether to show the mask | `boolean` | `true` |
| maskClosable | Whether to close when the mask is clicked | `boolean` | `true` |
| closable | Whether to show the close icon at the top right | `boolean` | `false` |
| closeIcon | Custom close icon, the same-named slot takes precedence | `VueNode` | `<CloseOutlined />` |
| round | Whether to round the corners on the side facing the page | `boolean` | `false` |
| safeArea | Whether to reserve the bottom safe area when popping up from the bottom | `boolean` | `true` |
| lockScroll | Whether to lock page scrolling while open | `boolean` | `true` |
| keyboard | Whether to support closing with ESC | `boolean` | `true` |
| destroyOnHidden | Destroy the content after it is closed | `boolean` | `false` |
| forceRender | Pre-render the content before it is first opened | `boolean` | `false` |
| getContainer | The mount node, `false` mounts it in place | `string \| HTMLElement \| (() => HTMLElement) \| false` | `document.body` |
| zIndex | The z-index, auto-incremented by default so that the most recently opened one is on top | `number` | - |
| width | Panel width | `number \| string` | - |
| height | Panel height | `number \| string` | - |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'mask' \| 'body', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'mask' \| 'body', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| update:open | The visible state changed | `(open: boolean) => void` |
| close | Triggered when the user closes it (mask click, close icon, ESC) | `(event?: Event) => void` |
| maskClick | Triggered when the mask is clicked | `(event: MouseEvent) => void` |
| afterOpenChange | Triggered after the open / close animation ends | `(open: boolean) => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | The popup content |
| closeIcon | Custom close icon, takes precedence over the `closeIcon` prop |

### Methods

| Name | Description | Type |
| --- | --- | --- |
| nativeElement | The panel DOM node | `HTMLElement` |

## Design Token

Customize through `theme.components.Popup` of `ConfigProvider` or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-popup-z-index` | Base z-index (when `zIndex` is not specified and not assigned automatically) | `var(--am-z-index-popup-base)` |
| `--am-popup-bg` | Background color of the panel | `var(--am-color-bg-elevated)` |
| `--am-popup-border-radius` | Border radius | `var(--am-border-radius-xl)` |
| `--am-popup-close-size` | Close icon size | `18px` |

## Differences from PC

- PC has no standalone `Popup` component. It is the base container of all popup components on mobile (`Drawer`, `Modal`, `ActionSheet`, etc.).
- The prop names are consistent with the PC `Drawer` / `Modal`: `open`, `placement`, `mask`, `maskClosable`, `closable`, `destroyOnHidden`, `forceRender`, `getContainer`, `zIndex`, `afterOpenChange`.
