# 显示进度条

## Description (zh-CN)

显示自动关闭通知框的进度条。

## Source

```vue
<script lang="ts" setup>
import { notification } from 'antdv-next'

const [api, ContextHolder] = notification.useNotification()

function openNotification(pauseOnHover: boolean) {
  api.open({
    title: 'Notification Title',
    description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    showProgress: true,
    pauseOnHover,
  })
}
</script>

<template>
  <ContextHolder />
  <a-space>
    <a-button type="primary" @click="openNotification(true)">
      Pause on hover
    </a-button>
    <a-button type="primary" @click="openNotification(false)">
      Don't pause on hover
    </a-button>
  </a-space>
</template>
```
