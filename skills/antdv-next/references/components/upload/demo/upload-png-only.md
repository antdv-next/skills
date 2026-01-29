# 只上传 png 图片

## Description (zh-CN)

`beforeUpload` 返回 `false` 或 `Promise.reject` 时，只用于拦截上传行为，不会阻止文件进入上传列表（[原因](https://github.com/ant-design/ant-design/issues/15561#issuecomment-475108235)）。如果需要阻止列表展现，可以通过返回 `Upload.LIST_IGNORE` 实现。

## Source

```vue
<script setup lang="ts">
import type { UploadEmits, UploadProps } from 'antdv-next'
import { UploadOutlined } from '@antdv-next/icons'
import { message, Upload } from 'antdv-next'

const beforeUpload: UploadProps['beforeUpload'] = (file) => {
  const isPng = file.type === 'image/png'
  if (!isPng) {
    message.error(`${file.name} is not a png file`)
  }
  return isPng || Upload.LIST_IGNORE
}

const handleChange: UploadEmits['change'] = (info) => {
  console.log(info.fileList)
}
</script>

<template>
  <a-upload :before-upload="beforeUpload" @change="handleChange">
    <a-button>
      <template #icon>
        <UploadOutlined />
      </template>
      Upload png only
    </a-button>
  </a-upload>
</template>
```
