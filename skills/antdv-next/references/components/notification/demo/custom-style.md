# 自定义样式

## Description (zh-CN)

使用 style 和 class 来定义样式。

## Source

```vue
<script setup lang="ts">
import { notification } from 'antdv-next'

const [api, ContextHolder] = notification.useNotification()

function openNotification() {
  api.open({
    title: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    class: 'custom-class',
    style: {
      width: '600px',
    },
  })
}
</script>

<template>
  <ContextHolder />
  <a-button type="primary" @click="openNotification">
    Open the notification box
  </a-button>
</template>
```
