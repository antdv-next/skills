# Basic usage

Set the image URL with `src` and the size with `width` / `height`.

## Source

```vue
<script setup lang="ts">
function createImage(text: string, color: string, width = 400, height = 300) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`
    + `<rect width="100%" height="100%" fill="${color}"/>`
    + `<circle cx="${width * 0.75}" cy="${height * 0.3}" r="${height * 0.12}" fill="#fff" fill-opacity="0.6"/>`
    + `<path d="M0 ${height} L${width * 0.35} ${height * 0.45} L${width * 0.6} ${height * 0.75} L${width * 0.8} ${height * 0.55} L${width} ${height} Z" fill="#fff" fill-opacity="0.35"/>`
    + `<text x="50%" y="50%" fill="#fff" font-size="${height / 6}" font-family="sans-serif" text-anchor="middle" dominant-baseline="central">${text}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const src = createImage('Image', '#1677ff')
</script>

<template>
  <am-image :src="src" alt="Sample image" :width="200" :height="150" />
</template>
```
