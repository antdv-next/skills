# Functional call

`ImagePreview.show()` opens a preview without declaring the component, and the returned object can be used to close it manually; `ImagePreview.clear()` closes all functional previews.

## Source

```vue
<script setup lang="ts">
import { ImagePreview } from '@antdv-next/mobile'
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

const last = ref('-')

function show() {
  ImagePreview.show({
    images,
    current: 1,
    closable: true,
    onChange: (index) => {
      last.value = `Switched to image ${index + 1}`
    },
    onClose: () => {
      last.value = 'Closed'
    },
  })
}

function showAndClose() {
  const handler = ImagePreview.show({ images, showIndex: false })
  setTimeout(() => handler.close(), 2000)
}
</script>

<template>
  <am-flex vertical gap="small">
    <am-button type="primary" block @click="show">
      Static call
    </am-button>
    <am-button block @click="showAndClose">
      Auto close after 2s
    </am-button>
  </am-flex>
  <p class="tip">
    Last callback: {{ last }}
  </p>
</template>

<style scoped>
.tip {
  margin: 12px 0 0;
  color: var(--am-color-text-description);
  font-size: 14px;
}
</style>
```
