# Validate before upload

`beforeUpload` validates a file before it is added to the list: returning `Upload.LIST_IGNORE` ignores the file; returning `false` keeps the file in the list without uploading it; it can also return a Promise that resolves a processed `File` / `Blob` (e.g. a compressed image).

## Source

```vue
<script setup lang="ts">
import type { UploadFile, UploadRawFile } from '@antdv-next/mobile'
import { Upload } from '@antdv-next/mobile'
import { ref } from 'vue'

const fileList = ref<UploadFile[]>([])
const message = ref('Only PNG / JPG images are allowed')

function beforeUpload(file: UploadRawFile) {
  const valid = file.type === 'image/png' || file.type === 'image/jpeg'
  if (!valid) {
    message.value = `${file.name} is not a PNG / JPG image, ignored`
    return Upload.LIST_IGNORE
  }
  message.value = `${file.name} passed the check`
  return true
}
</script>

<template>
  <am-upload v-model:file-list="fileList" multiple :before-upload="beforeUpload" />
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
