---
title: Watermark
description: Add a watermark to a specific area of the page.
---

## When To Use

- Use when the page needs to be watermarked to identify the copyright.
- Suitable for preventing information theft, such as internal documents, sensitive personal information and screenshot tracing.

The API is aligned with `Watermark` of Antdv Next: it is drawn with Canvas, supports text / multi-line text / image watermarks, and the watermark node is restored automatically after being removed or tampered with.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Multi-line watermark | demo/multi-line.md |
| Image watermark | demo/image.md |
| Custom configuration | demo/custom.md |
| Full-page watermark | demo/full-page.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| content | Watermark text content, an array means multiple lines | `string \| string[]` | - |
| image | Image source, a 2x or 3x image is recommended, takes priority over `content` (falls back to the text when loading fails) | `string` | - |
| width | The width of the watermark, defaults to the width of `content` itself | `number` | `120` (image) |
| height | The height of the watermark, defaults to the height of `content` itself | `number` | `64` (image) |
| rotate | The rotation angle of the watermark when drawn, in `°` | `number` | `-22` |
| zIndex | The `z-index` of the watermark layer | `number` | `9` |
| gap | The spacing between watermarks `[horizontal, vertical]` | `[number, number]` | `[100, 100]` |
| offset | The offset of the watermark from the top-left corner of the container, defaults to `gap / 2` | `[number, number]` | `[gap[0] / 2, gap[1] / 2]` |
| font | Text style | `WatermarkFont` | - |
| fullPage | Whether to cover the whole viewport (`position: fixed`) | `boolean` | `false` |
| rootClass | Class name of the root node | `string` | - |

### WatermarkFont

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| color | Font color, follows the theme by default (`--am-watermark-color`) | `string` | `var(--am-color-fill)` |
| fontSize | Font size | `number \| string` | `16` |
| fontWeight | Font weight | `'normal' \| 'lighter' \| 'bold' \| 'bolder' \| number` | `'normal'` |
| fontFamily | Font family | `string` | `'sans-serif'` |
| fontStyle | Font style | `'none' \| 'normal' \| 'italic' \| 'oblique'` | `'normal'` |
| textAlign | Text alignment | `'left' \| 'right' \| 'center' \| 'start' \| 'end'` | `'center'` |

### Events

| Event | Description | Type |
| --- | --- | --- |
| remove | Triggered when the watermark node is removed or tampered with from outside (the watermark is restored immediately) | `() => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | The content to be watermarked |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| render | Redraw the watermark manually, e.g. after switching dark mode through a class name on `<html>` | `() => void` |

## Design Token

| Token | Description | Default |
| --- | --- | --- |
| `--am-watermark-color` | Default watermark text color (resolved to the actual color value when drawing) | `var(--am-color-fill)` |

## Differences from PC

- Added `fullPage`, a single prop covers the whole mobile page.
- The default text color comes from a CSS variable and the watermark is redrawn automatically when the theme is switched through `ConfigProvider`; call `render()` when the theme is switched in another way.
- `inherit` is not supported (on PC it passes the watermark through to Modal / Drawer): use a `fullPage` watermark to cover popups on mobile.
- `remove` is provided as an event (it is the `onRemove` prop on PC).
