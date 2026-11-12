---
title: Mask
description: A translucent mask covering the page, used to emphasize specific content and block other operations.
---

## When To Use

- When the page needs to be covered with a mask to draw the user's attention to the content above it (e.g. onboarding guides, custom dialogs, loading states).
- For regular popup scenarios, prefer components with a built-in mask such as [Popup](../popup/docs.md) and [Modal](../modal/docs.md).

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Mask color | demo/color.md |
| Custom content | demo/content.md |
| Local mask | demo/container.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| open | Whether it is visible, supports `v-model:open` | `boolean` | `false` |
| closable | Whether to close when the mask itself is clicked (emits `update:open`) | `boolean` | `false` |
| color | Mask color, `'default'` uses the theme mask color, `'white'` is translucent white, any CSS color can also be passed | `'default' \| 'white' \| string` | `'default'` |
| lockScroll | Whether to lock page scrolling while visible | `boolean` | `true` |
| destroyOnHidden | Destroy the content after it is hidden | `boolean` | `false` |
| getContainer | The mount node, rendered in place by default | `string \| HTMLElement \| (() => HTMLElement) \| false` | `false` |
| zIndex | The z-index | `number` | `1000` |
| rootClass | Class name of the root node | `string` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| update:open | The visible state changed (triggered by clicking the mask when `closable`) | `(open: boolean) => void` |
| click | Triggered when the mask itself is clicked, not when the content is clicked | `(event: MouseEvent) => void` |
| afterOpenChange | Triggered after the show / hide animation ends | `(open: boolean) => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | The content above the mask |

## Design Token

| Token | Description | Default |
| --- | --- | --- |
| `--am-mask-z-index` | The z-index | `var(--am-z-index-popup-base)` |
| `--am-color-bg-mask` | Mask color (global token) | `rgb(0 0 0 / 45%)` |

## Differences from PC

- PC has no standalone `Mask` component, the mask is built into components such as `Modal` and `Drawer`. Mobile exposes it separately to make custom overlays easier to build.
