# Limit count and size

`maxCount` limits the number of files, and the upload button is hidden once the limit is reached; `maxSize` limits the size of a single file (bytes). Ignored files are reported through the `exceed` event.

## Source

```vue
<script setup lang="ts">
import type { UploadFile } from '@antdv-next/mobile'
import { ref } from 'vue'

const fileList = ref<UploadFile[]>([])
const message = ref('Up to 3 images, 500KB each')

function onExceed(files: File[], reason: 'maxCount' | 'maxSize') {
  message.value = reason === 'maxCount'
    ? `Limit exceeded, ${files.length} file(s) ignored`
    : `${files.map(file => file.name).join(', ')} exceeds 500KB`
}
</script>

<template>
  <am-upload
    v-model:file-list="fileList"
    accept="image/*"
    multiple
    :max-count="3"
    :max-size="500 * 1024"
    @exceed="onExceed"
  />
  <p class="tip">
    {{ message }}
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
