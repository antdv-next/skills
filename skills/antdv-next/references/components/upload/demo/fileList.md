# 完全控制的上传列表

## Description (zh-CN)

使用 `fileList` 对列表进行完全控制，可以实现各种自定义功能，以下演示二种情况：

1. 上传列表数量的限制。

2. 读取远程路径并显示链接。

## Source

```vue
<script setup lang="ts">
import type { UploadEmits, UploadFile } from 'antdv-next'
import { UploadOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const fileList = ref<UploadFile[]>([
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'http://www.baidu.com/xxx.png',
  },
])

const handleChange: UploadEmits['change'] = (info) => {
  let newFileList = [...info.fileList]

  newFileList = newFileList.slice(-2)

  newFileList = newFileList.map((file) => {
    if (file.response && typeof file.response === 'object' && 'url' in file.response) {
      file.url = (file.response as { url?: string }).url
    }
    return file
  })

  fileList.value = newFileList
}
</script>

<template>
  <a-upload
    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
    multiple
    :file-list="fileList"
    @change="handleChange"
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
