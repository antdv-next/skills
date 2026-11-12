# Rounded and circular

`radius` sets the border radius, and `round` displays the image as a circle (when the width and height are equal).

## Source

```vue
<script setup lang="ts">
function createImage(text: string, color: string, width = 300, height = 300) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`
    + `<rect width="100%" height="100%" fill="${color}"/>`
    + `<text x="50%" y="50%" fill="#fff" font-size="${height / 5}" font-family="sans-serif" text-anchor="middle" dominant-baseline="central">${text}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const src = createImage('A', '#722ed1')
</script>

<template>
  <am-flex gap="middle" align="center">
    <am-image :src="src" :width="88" :height="88" fit="cover" />
    <am-image :src="src" :width="88" :height="88" fit="cover" :radius="12" />
    <am-image :src="src" :width="88" :height="88" fit="cover" round />
  </am-flex>
</template>
```
