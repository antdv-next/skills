# Basic usage

Control the visibility with `v-model:open` and pass the image list with `images`. Swipe left / right to switch, pinch or double-tap to zoom, single tap or swipe down to close.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

function createImage(text: string, color: string, width = 900, height = 1200) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`
    + `<rect width="100%" height="100%" fill="${color}"/>`
    + `<circle cx="${width * 0.75}" cy="${height * 0.25}" r="${width * 0.08}" fill="#fff" fill-opacity="0.6"/>`
    + `<path d="M0 ${height} L${width * 0.35} ${height * 0.55} L${width * 0.6} ${height * 0.8} L${width * 0.8} ${height * 0.65} L${width} ${height} Z" fill="#fff" fill-opacity="0.35"/>`
    + `<text x="50%" y="50%" fill="#fff" font-size="${width / 6}" font-family="sans-serif" text-anchor="middle" dominant-baseline="central">${text}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const images = [
  createImage('1', '#1677ff'),
  createImage('2', '#13c2c2', 1200, 800),
  createImage('3', '#722ed1'),
  createImage('4', '#eb2f96', 1200, 600),
]

const open = ref(false)
</script>

<template>
  <am-button type="primary" block @click="open = true">
    Preview images
  </am-button>
  <am-image-preview v-model:open="open" :images="images" />
</template>
```
