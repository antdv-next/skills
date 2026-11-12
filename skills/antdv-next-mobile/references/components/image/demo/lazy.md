# Lazy loading

With `lazy` set, the image starts loading only after it enters the viewport (based on `IntersectionObserver`). Scroll down inside the scroll area below to see the effect.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

function createImage(text: string, color: string, width = 600, height = 300) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`
    + `<rect width="100%" height="100%" fill="${color}"/>`
    + `<text x="50%" y="50%" fill="#fff" font-size="${height / 6}" font-family="sans-serif" text-anchor="middle" dominant-baseline="central">${text}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const colors = ['#1677ff', '#13c2c2', '#722ed1', '#eb2f96', '#fa8c16', '#52c41a']
const images = colors.map((color, index) => createImage(`Image ${index + 1}`, color))
const loaded = ref(0)
</script>

<template>
  <p class="tip">
    Loaded {{ loaded }} / {{ images.length }}
  </p>
  <div class="scroller">
    <am-image
      v-for="src in images"
      :key="src"
      :src="src"
      lazy
      width="100%"
      :height="150"
      :radius="8"
      class="image"
      @load="loaded++"
    />
  </div>
</template>

<style scoped>
.tip {
  margin: 0 0 8px;
  color: var(--am-color-text-description);
  font-size: 14px;
}

.scroller {
  height: 240px;
  overflow-y: auto;
}

.image {
  display: block;
  margin-bottom: 12px;
}
</style>
```
