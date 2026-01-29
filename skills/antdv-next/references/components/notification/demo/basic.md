# 静态方法（不推荐）

## Description (zh-CN)

静态方法无法消费 Context，不能动态响应 ConfigProvider 提供的各项配置，启用 `layer` 时还可能导致样式异常。请优先使用 hooks 版本或者 App 组件提供的 `notification` 实例。

## Source

```vue
<script setup lang="ts">
import { notification } from 'antdv-next'

function openNotification() {
  notification.open({
    title: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!')
    },
  })
}
</script>

<template>
  <a-button type="primary" @click="openNotification">
    Open the notification box
  </a-button>
</template>
```
