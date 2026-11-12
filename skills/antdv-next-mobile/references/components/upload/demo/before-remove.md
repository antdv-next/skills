# Confirm before remove

Removal is prevented when `beforeRemove` returns `false` or a Promise that resolves `false`, which can be used for a confirmation step. `showUploadList` can turn off the remove badge individually.

## Source

```vue
<script setup lang="ts">
import type { UploadFile } from '@antdv-next/mobile'
import { ref } from 'vue'

function createImage(text: string, color: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">`
    + `<rect width="100%" height="100%" fill="${color}"/>`
    + `<text x="50%" y="50%" fill="#fff" font-size="80" font-family="sans-serif" text-anchor="middle" dominant-baseline="central">${text}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const fileList = ref<UploadFile[]>([
  { uid: '-1', name: 'a.png', status: 'done', url: createImage('A', '#1677ff') },
  { uid: '-2', name: 'b.png', status: 'done', url: createImage('B', '#13c2c2') },
])
const readonlyList = ref<UploadFile[]>([
  { uid: '-3', name: 'c.png', status: 'done', url: createImage('C', '#722ed1') },
  { uid: '-4', name: 'd.png', status: 'done', url: createImage('D', '#eb2f96') },
])

function beforeRemove(file: UploadFile) {
  return window.confirm(`Delete ${file.name}?`)
}
</script>

<template>
  <p class="title">
    Confirm before deleting
  </p>
  <am-upload v-model:file-list="fileList" :before-remove="beforeRemove" />
  <p class="title">
    Read only (no delete badge or upload button)
  </p>
  <am-upload v-model:file-list="readonlyList" :show-upload-list="{ showRemoveIcon: false }" :max-count="2" />
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
</style>
```
