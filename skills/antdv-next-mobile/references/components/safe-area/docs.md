---
title: SafeArea
description: Reserves space for the notch and the bottom home indicator on full-screen devices.
---

## When To Use

- When the page has an action bar or tab bar stuck to the bottom, to keep it from being covered by the home indicator of devices such as iPhone.
- When building a custom immersive navigation bar, to reserve space for the notch / status bar at the top.

The component itself is a placeholder block whose height equals the corresponding safe area; its height is `0` on devices without a safe area.

> `viewport-fit=cover` must be added to the `viewport` meta of the page for `env(safe-area-inset-*)` to take effect:
> `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Bottom action bar | demo/fixed-bar.md |
| Wrap content | demo/slot.md |
| Custom multiple | demo/multiple.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| position | Which side of the safe area to reserve | `'top' \| 'bottom'` | `'bottom'` |
| rootClass | Class name of the root element | `string` | - |

### Slots

| Slot | Description |
| --- | --- |
| default | Optional content, the safe area is added as padding above / below the content |

## Design Token

| Token | Description | Default |
| --- | --- | --- |
| `--am-safe-area-multiple` | Multiple of the safe area height | `1` |

## Differences from PC

- A mobile-only component, there is no counterpart in Antdv Next.
- When you only need to add safe area padding to an existing element, you can also use the utility classes `am-safe-area-top` / `am-safe-area-bottom` directly.
