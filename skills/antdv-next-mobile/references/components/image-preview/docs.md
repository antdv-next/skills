---
title: ImagePreview
description: A full-screen image viewer with swipe to switch, pinch to zoom, double-tap to zoom in and swipe down to close.
---

## When To Use

- When one image or a group of images has to be viewed full screen, zooming with gestures to see the details.
- When viewing the large image after tapping a thumbnail, an album cover, an upload list, etc.

Both the component usage (`v-model:open`) and the functional usage (`ImagePreview.show()`) are supported. The `preview` of [Image](../image/docs.md) and the image preview of [Upload](../upload/docs.md) are both built on this component.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Initial index and controlled mode | demo/current.md |
| Ways to close | demo/closable.md |
| Custom page indicator and footer | demo/slots.md |
| Functional call | demo/static.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| open | Whether it is shown, supports `v-model:open` | `boolean` | `false` |
| defaultOpen | Whether it is shown by default (uncontrolled) | `boolean` | `false` |
| images | List of images | `(string \| { src: string, alt?: string })[]` | `[]` |
| current | Index of the current image, supports `v-model:current` | `number` | - |
| defaultCurrent | Index of the image shown by default (uncontrolled) | `number` | `0` |
| loop | Whether to loop when switching | `boolean` | `true` |
| showIndex | Whether to show the page indicator (e.g. `2 / 5`) | `boolean` | `true` |
| closable | Whether to show the close icon | `boolean` | `false` |
| closeIcon | Custom close icon; the same-named slot takes precedence | `VueNode` | - |
| closeOnClick | Whether a single tap on the image closes the preview | `boolean` | `true` |
| swipeToClose | Whether swiping down closes the preview when not zoomed | `boolean` | `true` |
| maxZoom | Maximum zoom scale | `number` | `3` |
| minZoom | Minimum scale while pinching in; it springs back to 1 on release | `number` | `1/3` |
| doubleTapZoom | Whether to enable double-tap zoom; a number is the double-tap zoom-in scale (2 by default). When disabled, a single tap closes immediately, without the delay of waiting for a double tap | `boolean \| number` | `true` |
| getContainer | The node to mount to; `false` renders in place | `string \| HTMLElement \| (() => HTMLElement) \| false` | `document.body` |
| zIndex | The z-index | `number` | - |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'image' \| 'index' \| 'footer', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'image' \| 'index' \| 'footer', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the image is switched | `(current: number) => void` |
| close | Triggered when the user requests to close (single tap, close icon, swipe down, ESC) | `() => void` |
| openChange | Triggered when the visibility changes | `(open: boolean) => void` |
| afterOpenChange | Triggered after the open / close animation ends | `(open: boolean) => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| index | Custom page indicator | `{ current: number, total: number }` |
| footer | Content fixed at the bottom | `{ current: number, total: number }` |
| image | Custom content of each page, replaces the default `<img>` | `{ src: string, alt?: string, index: number }` |
| closeIcon | Custom close icon | - |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| close | Close the preview | `() => void` |
| goTo | Switch to the given image | `(index: number, dontAnimate?: boolean) => void` |

### Static Methods

| Method | Description | Type |
| --- | --- | --- |
| ImagePreview.show | Open an image preview; the returned object can be used to close it | `(options: ImagePreviewShowOptions) => { close: () => void }` |
| ImagePreview.clear | Close all previews opened through `show` | `() => void` |

`ImagePreviewShowOptions` supports the props in the table above except `open` / `defaultOpen` / `defaultCurrent` / `classes` / `styles` (`current` is the initial index), plus:

| Parameter | Description | Type |
| --- | --- | --- |
| index | Custom page indicator | `(info: { current: number, total: number }) => VueNode` |
| footer | Content fixed at the bottom | `(info: { current: number, total: number }) => VueNode` |
| onChange | Callback when the image is switched | `(current: number) => void` |
| onClose | Callback when the user requests to close | `() => void` |
| afterClose | Callback after the close animation ends | `() => void` |

Functional calls render in a separate app; the theme and locale follow the global config of `ConfigProvider.config()`.

## Design Token

Customize through `theme.components.ImagePreview` of `ConfigProvider`, or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-image-preview-z-index` | The z-index | `var(--am-z-index-popup-base)` |
| `--am-image-preview-bg` | Background color | `var(--am-color-black)` |
| `--am-image-preview-color` | Foreground color of the page indicator, close icon, etc. | `var(--am-color-white)` |
| `--am-image-preview-index-font-size` | Font size of the page indicator | `var(--am-font-size)` |
| `--am-image-preview-index-top` | Distance of the page indicator from the top (excluding the safe area) | `16px` |
| `--am-image-preview-close-size` | Size of the close icon | `22px` |
| `--am-image-preview-duration` | Duration of the zoom and spring-back animations | `0.3s` |

## Differences from PC

PC has no standalone `ImagePreview` component; the preview is built into the `preview` config of `Image`. Mobile makes it a standalone component and offers a functional call:

- No toolbar (rotate, flip, zoom buttons); gestures are used instead: swipe left / right to switch, pinch to zoom, double-tap to zoom in, drag while zoomed, swipe down to close.
- Prop names follow the PC conventions such as `open`, `current`, `getContainer`, `afterOpenChange`.
