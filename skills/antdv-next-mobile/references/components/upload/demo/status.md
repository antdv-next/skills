# File status

The `status` of each item in `fileList` shows states such as uploading, failed and done; non-image files show an icon and the file name.

## Source

```vue
<script setup lang="ts">
import type { UploadFile } from '@antdv-next/mobile'
import { ref } from 'vue'

function createImage(text: string, color: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">`
    + `<rect width="100%" height="100%" fill="${color}"/>`
    + `<text x="50%" y="50%" fill="#fff" font-size="60" font-family="sans-serif" text-anchor="middle" dominant-baseline="central">${text}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const fileList = ref<UploadFile[]>([
  { uid: '-1', name: 'done.png', status: 'done', url: createImage('Done', '#1677ff') },
  { uid: '-2', name: 'uploading.png', status: 'uploading', percent: 36, thumbUrl: createImage('36%', '#13c2c2') },
  { uid: '-3', name: 'error.png', status: 'error', thumbUrl: createImage('Error', '#722ed1') },
  { uid: '-4', name: 'contract.pdf', status: 'done', type: 'application/pdf' },
])
</script>

<template>
  <am-upload v-model:file-list="fileList" />
</template>
```
