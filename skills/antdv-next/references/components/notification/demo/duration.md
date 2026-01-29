# 自动关闭延时

## Description (zh-CN)

自定义通知框自动关闭的延时，默认 `4.5s`，取消自动关闭只要将该值设为 `0` 即可。

## Source

```vue
<script setup lang="ts">
import { notification } from 'antdv-next'

const [api, ContextHolder] = notification.useNotification()

function openNotification() {
  api.open({
    title: 'Notification Title',
    description:
      'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
    duration: 0,
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
