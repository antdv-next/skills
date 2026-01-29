# 图片列表样式

## Description (zh-CN)

上传文件为图片，可展示本地缩略图。`IE8/9` 不支持浏览器本地缩略图展示（[Ref](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)），可以写 `thumbUrl` 属性来代替。

## Source

```vue
<script setup lang="ts">
import type { UploadFile } from 'antdv-next'
import { UploadOutlined } from '@antdv-next/icons'

const defaultFileList: UploadFile[] = [
  {
    uid: '0',
    name: 'xxx.png',
    status: 'uploading',
    percent: 33,
  },
  {
    uid: '-1',
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'zzz.png',
    status: 'error',
  },
]
</script>

<template>
  <a-upload
    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
    list-type="picture"
    :default-file-list="defaultFileList"
  >
    <a-button type="primary">
      <template #icon>
        <UploadOutlined />
      </template>
      Upload
    </a-button>
  </a-upload>
</template>
```
