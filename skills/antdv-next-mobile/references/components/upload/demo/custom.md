# Custom trigger area and columns

The default slot customizes the content of the upload button, `columns` sets the number of grid columns, and `capture` opens the camera directly; you can also override the `--am-upload-*` variables to adjust the appearance.

## Source

```vue
<script setup lang="ts">
import type { UploadFile } from '@antdv-next/mobile'
import { CameraOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const fileList = ref<UploadFile[]>([])
</script>

<template>
  <am-upload v-model:file-list="fileList" accept="image/*" capture="environment" :columns="3" class="custom-upload">
    <div class="trigger">
      <CameraOutlined class="trigger-icon" />
      <span>Take photo</span>
    </div>
  </am-upload>
</template>

<style scoped>
.custom-upload {
  --am-upload-gap: 12px;
  --am-upload-item-border-radius: 12px;
}

.trigger {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  color: var(--am-color-text-description);
  font-size: 12px;
}

.trigger-icon {
  font-size: 24px;
}
</style>
```
