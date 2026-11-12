# Basic usage

When `action` is not set, the selected files are only collected and can be submitted together with a form. Tap an image to preview it full screen, and tap the corner badge to remove it.

## Source

```vue
<script setup lang="ts">
import type { UploadFile } from '@antdv-next/mobile'
import { ref } from 'vue'

const fileList = ref<UploadFile[]>([])
</script>

<template>
  <am-upload v-model:file-list="fileList" accept="image/*" multiple />
  <p class="tip">
    {{ fileList.length }} file(s) selected
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
