# 限制数量

## Description (zh-CN)

通过 `maxCount` 限制上传数量。当为 `1` 时，始终用最新上传的代替当前。

## Source

```vue
<script setup lang="ts">
import { UploadOutlined } from '@antdv-next/icons'
</script>

<template>
  <a-space direction="vertical" style="width: 100%" size="large">
    <a-upload
      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
      list-type="picture"
      :max-count="1"
    >
      <a-button>
        <template #icon>
          <UploadOutlined />
        </template>
        Upload (Max: 1)
      </a-button>
    </a-upload>
    <a-upload
      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
      list-type="picture"
      :max-count="3"
      multiple
    >
      <a-button>
        <template #icon>
          <UploadOutlined />
        </template>
        Upload (Max: 3)
      </a-button>
    </a-upload>
  </a-space>
</template>
```
