# Loading placeholder and fallback

A placeholder is shown by default while loading and can be customized with the `placeholder` prop / slot. When loading fails, the `fallback` image is used; without a fallback image a failure hint is shown, which can also be customized with the `fallback` slot.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

function createImage(text: string, color: string, width = 300, height = 300) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`
    + `<rect width="100%" height="100%" fill="${color}"/>`
    + `<text x="50%" y="50%" fill="#fff" font-size="${height / 7}" font-family="sans-serif" text-anchor="middle" dominant-baseline="central">${text}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const fallback = createImage('Fallback', '#8c8c8c')
// Without src the image stays in the loading placeholder state
const loadingSrc = ref<string>()
</script>

<template>
  <div class="grid">
    <div class="item">
      <am-image :src="loadingSrc" :width="96" :height="96" :radius="8" />
      <span class="label">Default</span>
    </div>
    <div class="item">
      <am-image :src="loadingSrc" :width="96" :height="96" :radius="8">
        <template #placeholder>
          <span class="custom">Loading</span>
        </template>
      </am-image>
      <span class="label">Custom</span>
    </div>
    <div class="item">
      <am-image :src="loadingSrc" :width="96" :height="96" :radius="8" :placeholder="false" class="bordered" />
      <span class="label">None</span>
    </div>
    <div class="item">
      <am-image src="broken-image.png" :width="96" :height="96" :radius="8" />
      <span class="label">Load failed</span>
    </div>
    <div class="item">
      <am-image src="broken-image.png" :fallback="fallback" :width="96" :height="96" :radius="8" />
      <span class="label">Fallback</span>
    </div>
    <div class="item">
      <am-image src="broken-image.png" :width="96" :height="96" :radius="8">
        <template #fallback>
          <span class="custom">Image lost</span>
        </template>
      </am-image>
      <span class="label">Custom error</span>
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

.label {
  color: var(--am-color-text-description);
  font-size: 12px;
}

.custom {
  color: var(--am-color-primary);
  font-size: 12px;
}

.bordered {
  border: 1px dashed var(--am-color-border);
}
</style>
```
