# 自定义预览

## Description (zh-CN)

自定义本地预览，用于处理非图片格式文件（例如视频文件）。

## Source

```vue
<script setup lang="ts">
import type { UploadProps } from 'antdv-next'
import { UploadOutlined } from '@antdv-next/icons'

const previewFile: UploadProps['previewFile'] = (file) => {
  console.log('Your upload file:', file)
  return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
    method: 'POST',
    body: file as BodyInit,
  })
    .then(res => res.json())
    .then(({ thumbnail }) => thumbnail)
}
</script>

<template>
  <a-upload
    action="//jsonplaceholder.typicode.com/posts/"
    list-type="picture"
    :preview-file="previewFile"
  >
    <a-button>
      <template #icon>
        <UploadOutlined />
      </template>
      Upload
    </a-button>
  </a-upload>
</template>
```
