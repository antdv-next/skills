# 更新通知内容

## Description (zh-CN)

可以通过唯一的 key 来更新内容。

## Source

```vue
<script setup lang="ts">
import { notification } from 'antdv-next'

const key = 'updatable'

const [api, ContextHolder] = notification.useNotification()

function openNotification() {
  api.open({
    key,
    title: 'Notification Title',
    description: 'description.',
  })

  setTimeout(() => {
    api.open({
      key,
      title: 'New Title',
      description: 'New description.',
    })
  }, 1000)
}
</script>

<template>
  <ContextHolder />
  <a-button type="primary" @click="openNotification">
    Open the notification box
  </a-button>
</template>
```
