---
title: Image
description: An image with configurable fit mode, lazy loading, placeholder and preview.
---

## When To Use

- When you need to display images and want the loading placeholder and load-failure fallback handled consistently.
- When you need to control the fit mode (`cover` / `contain` ...), the border radius or lazy loading of an image.
- When tapping an image should open a full-screen preview with gesture zoom (the preview is provided by [ImagePreview](../image-preview/docs.md)).

The API is aligned with `Image` in antdv-next: `src`, `alt`, `width`, `height`, `fallback`, `placeholder`, `preview`, `Image.PreviewGroup`.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Fit mode | demo/fit.md |
| Rounded and circular | demo/shape.md |
| Loading placeholder and fallback | demo/placeholder.md |
| Lazy loading | demo/lazy.md |
| Tap to preview | demo/preview.md |
| Preview multiple images | demo/preview-group.md |

## API

### Image

#### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| src | Image URL | `string` | - |
| alt | Image description | `string` | - |
| width | Image width; numbers are in `px` | `string \| number` | - |
| height | Image height; numbers are in `px` | `string \| number` | - |
| fit | Image fit mode, same as `object-fit` | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `'fill'` |
| position | Image position, same as `object-position` | `string` | - |
| fallback | Fallback URL used when loading fails | `string` | - |
| placeholder | Loading placeholder. `true` uses the default placeholder, `false` shows none; a node is also accepted, and the same-named slot takes precedence | `boolean \| VueNode` | `true` |
| preview | Full-screen preview on tap; pass an object to configure the preview. Enabled by default inside `ImagePreviewGroup` | `boolean \| ImagePreviewConfig` | `false` |
| lazy | Whether to lazy load: loading starts only after the image enters the viewport | `boolean` | `false` |
| radius | Border radius; numbers are in `px` | `string \| number` | - |
| round | Whether to display as a circle | `boolean` | `false` |
| crossorigin | Same as the native `crossorigin` | `'anonymous' \| 'use-credentials' \| ''` | - |
| referrerpolicy | Same as the native `referrerpolicy` | `string` | - |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'image' \| 'placeholder', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'image' \| 'placeholder', CSSProperties>` | - |

#### Events

| Event | Description | Type |
| --- | --- | --- |
| load | Triggered when the image has loaded | `(event: Event) => void` |
| error | Triggered when the image fails to load | `(event: Event) => void` |
| click | Triggered when the image is tapped | `(event: MouseEvent) => void` |
| openChange | Triggered when the preview opens / closes | `(open: boolean) => void` |

#### Slots

| Slot | Description |
| --- | --- |
| placeholder | Custom loading placeholder, takes precedence over the `placeholder` prop |
| fallback | Custom content shown when loading fails |

### ImagePreviewConfig

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| open | Whether the preview is shown (controlled) | `boolean` | - |
| src | URL used for the preview, e.g. the original image of a thumbnail | `string` | `src` |
| closable | Whether to show the close icon | `boolean` | `false` |
| closeIcon | Custom close icon | `VueNode` | - |
| closeOnClick | Whether a single tap closes the preview | `boolean` | `true` |
| swipeToClose | Whether swiping down closes the preview | `boolean` | `true` |
| maxScale | Maximum zoom scale | `number` | `3` |
| minScale | Minimum zoom scale | `number` | `1/3` |
| doubleTapZoom | Double-tap zoom; a number is the zoom-in scale | `boolean \| number` | `true` |
| getContainer | The node the preview is mounted to | `string \| HTMLElement \| (() => HTMLElement) \| false` | `document.body` |
| zIndex | `z-index` of the preview layer | `number` | - |
| rootClass | Class name of the root element of the preview layer | `string` | - |

### ImagePreviewGroup

Also available as `Image.PreviewGroup`.

#### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| items | Array of images to preview; when not set, the `Image`s inside the group are collected | `(string \| { src: string, alt?: string })[]` | - |
| preview | Preview config; `false` disables it | `boolean \| ImagePreviewGroupConfig` | `true` |
| fallback | Default fallback URL for the images inside the group | `string` | - |

`ImagePreviewGroupConfig` adds the following on top of `ImagePreviewConfig`:

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| current | Index of the image currently previewed (controlled) | `number` | - |
| loop | Whether to loop when switching | `boolean` | `true` |
| showIndex | Whether to show the page indicator | `boolean` | `true` |

#### Events

| Event | Description | Type |
| --- | --- | --- |
| openChange | Triggered when the preview opens / closes | `(open: boolean, info: { current: number }) => void` |
| change | Triggered when the previewed image is switched | `(current: number, prevCurrent: number) => void` |

## Design Token

Customize through `theme.components.Image` of `ConfigProvider`, or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-image-placeholder-bg` | Background color of the placeholder | `var(--am-color-fill-tertiary)` |
| `--am-image-placeholder-color` | Color of the placeholder icon and text | `var(--am-color-text-quaternary)` |
| `--am-image-placeholder-icon-size` | Size of the placeholder icon | `28px` |
| `--am-image-placeholder-font-size` | Font size of the placeholder text | `var(--am-font-size-sm)` |
| `--am-image-border-radius` | Border radius | `0` |

## Differences from PC

- `preview` defaults to `false` (`true` on PC): on mobile, images mostly sit inside tappable cards / lists, so enable the preview explicitly when needed, or put the image into `ImagePreviewGroup`.
- The preview layer is the mobile [ImagePreview](../image-preview/docs.md): gesture zoom, double-tap to zoom in, swipe down to close; the toolbar related configs of PC are not supported (`actionsRender`, `imageRender`, `cover`, `mask`, `scaleStep`, `movable`, `wheel`, `focusTrap`, `onTransform`).
- `preview.onOpenChange` / `onChange` become the component events `openChange` / `change`.
- `placeholder` shows the built-in placeholder by default; on load failure a failure hint with an icon is shown by default, and the `fallback` slot customizes the failure content.
- Adds the `fit`, `position`, `lazy`, `radius` and `round` props and the `load` event.
