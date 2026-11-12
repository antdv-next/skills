# Preview multiple images

Wrap multiple images with `am-image-preview-group`, then tap any of them to swipe through them in the preview. You can also specify the list of images to preview with `items`, to implement "tap the cover to preview the album".

## Source

```vue
<script setup lang="ts">
function createImage(text: string, color: string, width = 600, height = 600) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`
    + `<rect width="100%" height="100%" fill="${color}"/>`
    + `<text x="50%" y="50%" fill="#fff" font-size="${height / 5}" font-family="sans-serif" text-anchor="middle" dominant-baseline="central">${text}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const colors = ['#1677ff', '#13c2c2', '#722ed1', '#eb2f96', '#fa8c16', '#52c41a']
const images = colors.map((color, index) => createImage(String(index + 1), color))
</script>

<template>
  <p class="title">
    Images collected from the group
  </p>
  <am-image-preview-group>
    <div class="grid">
      <am-image v-for="src in images" :key="src" :src="src" fit="cover" :radius="8" class="cell" />
    </div>
  </am-image-preview-group>

  <p class="title">
    Tap the cover to preview the album
  </p>
  <am-image-preview-group :items="images">
    <am-image :src="images[0]" :width="120" :height="120" fit="cover" :radius="8" />
  </am-image-preview-group>
</template>

<style scoped>
.title {
  margin: 0 0 8px;
  color: var(--am-color-text-description);
  font-size: 14px;
}

.title:not(:first-child) {
  margin-top: 16px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.cell {
  display: block;
  aspect-ratio: 1 / 1;
}
</style>
```
