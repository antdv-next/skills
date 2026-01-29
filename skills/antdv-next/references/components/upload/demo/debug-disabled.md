# debug-disabled

## Description (zh-CN)

Disabled Style Debug.

## Source

```vue
<script setup lang="ts">
import type { UploadFile } from 'antdv-next'
import { InboxOutlined, PlusOutlined, UploadOutlined } from '@antdv-next/icons'

const fileList: UploadFile[] = [
  {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-xxx',
    percent: 50,
    name: 'image.png',
    status: 'uploading',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-5',
    name: 'image.png',
    status: 'error',
  },
]
</script>

<template>
  <a-space direction="vertical">
    <a-upload disabled>
      Click Text to Upload
    </a-upload>
    <a-upload disabled>
      <a-button>
        <template #icon>
          <UploadOutlined />
        </template>
        Click to Upload
      </a-button>
    </a-upload>
    <a-upload name="avatar" list-type="picture-card" :file-list="fileList" disabled>
      <button
        style="color: inherit; cursor: inherit; border: 0; background: none"
        type="button"
      >
        <PlusOutlined />
        <div style="margin-top: 8px">
          Upload
        </div>
      </button>
    </a-upload>
    <a-upload name="avatar" list-type="picture-circle" :file-list="fileList" disabled>
      <button
        style="color: inherit; cursor: inherit; border: 0; background: none"
        type="button"
      >
        <PlusOutlined />
        <div style="margin-top: 8px">
          Upload
        </div>
      </button>
    </a-upload>
    <a-upload-dragger disabled>
      <p class="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p class="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p class="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading company data or
        other banned files.
      </p>
    </a-upload-dragger>
  </a-space>
</template>
```
