# File list

`listType="text"` displays the files as a list, which suits non-image files such as documents. With `disabled` set, files cannot be selected or removed.

## Source

```vue
<script setup lang="ts">
import type { UploadFile } from '@antdv-next/mobile'
import { ref } from 'vue'

const fileList = ref<UploadFile[]>([
  { uid: '-1', name: 'project-plan.pdf', status: 'done' },
  { uid: '-2', name: 'quotation.xlsx', status: 'uploading', percent: 48 },
  { uid: '-3', name: 'meeting-notes.docx', status: 'error' },
])
const disabledList = ref<UploadFile[]>([{ uid: '-4', name: 'archived.zip', status: 'done' }])
</script>

<template>
  <am-upload v-model:file-list="fileList" list-type="text" multiple />
  <div style="height: 16px" />
  <am-upload v-model:file-list="disabledList" list-type="text" disabled />
</template>
```
