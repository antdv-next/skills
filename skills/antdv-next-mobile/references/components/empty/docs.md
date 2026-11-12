---
title: Empty
description: Empty state placeholder.
---

## When To Use

- When there is no data provided, display for friendly tips, e.g. an empty order list or no search results.
- User tutorial to create something in a fresh new situation, an action button can be placed at the bottom.

The built-in illustrations are drawn entirely with design tokens and adapt to dark mode automatically.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Simple illustration | demo/simple.md |
| Custom description | demo/description.md |
| Bottom action | demo/action.md |
| Custom image | demo/custom-image.md |
| Internationalization | demo/locale.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| image | Image URL (string) or a custom node, the same-named slot takes precedence; set to `false` to hide the image | `VueNode` | `Empty.PRESENTED_IMAGE_DEFAULT` |
| description | Custom description content, the same-named slot takes precedence; set to `false` or `null` to hide the description | `VueNode` | Locale text `Empty.description` |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'image' \| 'description' \| 'footer', string>` | - |
| styles | Semantic structure styles, the image size can be set through `styles.image` | `Record<'root' \| 'image' \| 'description' \| 'footer', CSSProperties>` | - |

### Slots

| Slot | Description |
| --- | --- |
| default | Bottom content, usually action buttons |
| image | Custom image, takes precedence over the `image` prop |
| description | Custom description, takes precedence over the `description` prop |

### Built-in images

| Static property | Description |
| --- | --- |
| `Empty.PRESENTED_IMAGE_DEFAULT` | The default illustration |
| `Empty.PRESENTED_IMAGE_SIMPLE` | A simple line illustration that also makes the component use more compact spacing, suitable for local areas such as lists and pickers |

```vue
<script setup lang="ts">
import { Empty } from '@antdv-next/mobile'
</script>

<template>
  <am-empty :image="Empty.PRESENTED_IMAGE_SIMPLE" />
</template>
```

## Design Token

| Token | Description | Default |
| --- | --- | --- |
| `--am-empty-padding-block` | Vertical padding | `var(--am-padding-xl)` |
| `--am-empty-image-height` | Image height | `100px` |
| `--am-empty-image-height-normal` | Height of the simple illustration | `40px` |
| `--am-empty-description-color` | Description text color | `var(--am-color-text-description)` |
| `--am-empty-description-font-size` | Description font size | `var(--am-font-size)` |
| `--am-empty-image-fill` | Light fill of the built-in illustrations | `var(--am-color-fill-secondary)` |
| `--am-empty-image-fill-strong` | Dark fill of the built-in illustrations | `var(--am-color-fill)` |
| `--am-empty-image-surface` | Surface color of the built-in illustrations | `var(--am-color-bg-container)` |
| `--am-empty-image-stroke` | Stroke color of the built-in illustrations | `var(--am-color-border)` |

## Differences from PC

- The built-in illustrations are redrawn for mobile, and all colors come from design tokens (PC computes them from the theme color in JS).
- `Empty.PRESENTED_IMAGE_DEFAULT` / `Empty.PRESENTED_IMAGE_SIMPLE` are render functions instead of VNodes, the usage stays the same.
- The deprecated `imageStyle` is not supported, use `styles.image` instead.
- `image` additionally supports `false`, for a text-only empty state.
- The component has its own vertical padding and is horizontally centered in its container.
