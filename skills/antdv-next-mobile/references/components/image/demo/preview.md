# Tap to preview

With `preview` set, tapping the image opens a full-screen preview that supports pinch to zoom, double-tap to zoom in, and swipe down or single tap to close. `preview.src` specifies the original image used for the preview.

## Source

```vue
<script setup lang="ts">
function createImage(text: string, color: string, width = 600, height = 450) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`
    + `<rect width="100%" height="100%" fill="${color}"/>`
    + `<circle cx="${width * 0.75}" cy="${height * 0.3}" r="${height * 0.12}" fill="#fff" fill-opacity="0.6"/>`
    + `<path d="M0 ${height} L${width * 0.35} ${height * 0.45} L${width * 0.6} ${height * 0.75} L${width * 0.8} ${height * 0.55} L${width} ${height} Z" fill="#fff" fill-opacity="0.35"/>`
    + `<text x="50%" y="50%" fill="#fff" font-size="${height / 8}" font-family="sans-serif" text-anchor="middle" dominant-baseline="central">${text}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const thumb = createImage('Thumbnail', '#1677ff', 200, 150)
const origin = createImage('HD 1200 × 900', '#1677ff', 1200, 900)
</script>

<template>
  <am-flex gap="middle">
    <am-image :src="origin" :width="120" :height="90" :radius="8" preview />
    <am-image :src="thumb" :width="120" :height="90" :radius="8" :preview="{ src: origin, closable: true, maxScale: 5 }" />
  </am-flex>
</template>
```
