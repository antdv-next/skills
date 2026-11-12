# Fit mode

`fit` maps to the native `object-fit`, and `position` to `object-position`.

## Source

```vue
<script setup lang="ts">
function createImage(text: string, color: string, width = 400, height = 240) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`
    + `<rect width="100%" height="100%" fill="${color}"/>`
    + `<circle cx="${width * 0.75}" cy="${height * 0.3}" r="${height * 0.12}" fill="#fff" fill-opacity="0.6"/>`
    + `<path d="M0 ${height} L${width * 0.35} ${height * 0.45} L${width * 0.6} ${height * 0.75} L${width * 0.8} ${height * 0.55} L${width} ${height} Z" fill="#fff" fill-opacity="0.35"/>`
    + `<text x="50%" y="50%" fill="#fff" font-size="${height / 6}" font-family="sans-serif" text-anchor="middle" dominant-baseline="central">${text}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const src = createImage('5 : 3', '#13c2c2')
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
</script>

<template>
  <div class="grid">
    <div v-for="fit in fits" :key="fit" class="item">
      <am-image :src="src" :fit="fit" :width="96" :height="96" class="image" />
      <span class="label">{{ fit }}</span>
    </div>
    <div class="item">
      <am-image :src="src" fit="cover" position="left" :width="96" :height="96" class="image" />
      <span class="label">cover + left</span>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}

.image {
  background: var(--am-color-fill-tertiary);
}

.label {
  color: var(--am-color-text-description);
  font-size: 12px;
}
</style>
```
