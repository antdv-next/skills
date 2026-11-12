---
title: Signature
description: Write a signature on a canvas with a finger and export it as an image.
---

## When To Use

- When the user has to confirm with a handwritten signature, such as e-contracts, delivery receipts or authorizations.
- When the handwriting has to be exported as a png / jpg image and uploaded to the server.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Pen color and width | demo/pen.md |
| Custom actions | demo/footer.md |
| Export jpg with a background | demo/jpg.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| penColor | Color of the stroke. Defaults to the computed value of `--am-signature-pen-color`, so it follows the theme (dark mode) | `string` | Text color of the theme |
| lineWidth | Width of the stroke in px | `number` | `3` |
| backgroundColor | Background of the exported image. It does not change how the canvas looks (use `--am-signature-bg` for that) | `string` | transparent for png / `#fff` for jpg |
| type | Format of the exported image | `'png' \| 'jpg'` | `'png'` |
| quality | Quality of the exported jpg, between 0 and 1 | `number` | `0.92` |
| disabled | Whether it is disabled: no writing and the built-in buttons cannot be tapped | `boolean` | `false` |
| placeholder | Hint shown while the canvas is empty, the same-named slot takes precedence | `VueNode` | - |
| tips | Text shown when the browser does not support Canvas, the same-named slot takes precedence | `VueNode` | `Canvas is not supported in this browser` |
| clearText | Text of the clear button, the same-named slot takes precedence | `VueNode` | `Clear` |
| confirmText | Text of the confirm button, the same-named slot takes precedence | `VueNode` | `Confirm` |
| footer | Custom footer, `false` / `null` hides the built-in buttons, the same-named slot takes precedence | `VueNode` | Clear + Confirm buttons |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'content' \| 'canvas' \| 'placeholder' \| 'footer', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'content' \| 'canvas' \| 'placeholder' \| 'footer', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| start | Triggered when a stroke starts | `(event: TouchEvent \| MouseEvent) => void` |
| signing | Triggered while writing | `(event: TouchEvent \| MouseEvent) => void` |
| end | Triggered when a stroke ends | `(event: TouchEvent \| MouseEvent) => void` |
| confirm | Triggered when the confirm button is tapped or `confirm()` is called, `image` is `''` when the canvas is empty | `(result: { image: string, canvas: HTMLCanvasElement }) => void` |
| clear | Triggered when the clear button is tapped or `clear()` is called | `() => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| placeholder | Hint shown while the canvas is empty | - |
| tips | Text shown when the browser does not support Canvas | - |
| clearText | Content of the clear button | - |
| confirmText | Content of the confirm button | - |
| footer | Replaces the footer actions | `{ clear: () => void, confirm: () => void, empty: boolean, disabled: boolean }` |

### Methods

| Name | Description | Type |
| --- | --- | --- |
| clear() | Clear the canvas and emit `clear` | `() => void` |
| confirm() | Export the image, emit `confirm` and return the result | `() => { image: string, canvas: HTMLCanvasElement }` |
| toDataURL() | Only export the data URL of the image (no event), returns `''` when the canvas is empty | `() => string` |
| isEmpty() | Whether the canvas is empty | `() => boolean` |
| resize() | Fit the canvas to its current size and redraw the existing strokes. Call it after the container became visible or changed its size | `() => void` |

## Design Token

Customize through `theme.components.Signature` of `ConfigProvider`, or override the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-signature-height` | Height of the canvas | `200px` |
| `--am-signature-bg` | Background of the canvas (display only, not exported) | `var(--am-color-bg-container)` |
| `--am-signature-border-width` | Border width | `var(--am-line-width)` |
| `--am-signature-border-style` | Border style | `dashed` |
| `--am-signature-border-color` | Border color | `var(--am-color-border)` |
| `--am-signature-border-radius` | Border radius | `var(--am-border-radius-lg)` |
| `--am-signature-pen-color` | Default pen color | `var(--am-color-text)` |
| `--am-signature-placeholder-color` | Color of the placeholder | `var(--am-color-text-placeholder)` |
| `--am-signature-placeholder-font-size` | Font size of the placeholder | `var(--am-font-size-lg)` |
| `--am-signature-footer-gap` | Gap between the buttons | `var(--am-margin-xs)` |
| `--am-signature-footer-margin` | Space between the canvas and the footer | `var(--am-margin-sm)` |

## Differences from PC

- antdv-next (PC) has no such component. `Signature` is mobile only, with the capabilities of Vant's `Signature`.
- Props follow the antdv-next conventions: `footer` (like `Modal`, `false` hides it), `rootClass`, `classes`, `styles`, and every render-type prop has a same-named slot.
- The canvas is scaled by `devicePixelRatio` to stay sharp on high-density screens, and it refits automatically while keeping the strokes when its size changes.
- Besides touch, writing with the mouse is supported too, which is handy when debugging in a desktop browser.
