# Custom semantic dom styling

## Description (en-US)

## Source

```vue
<script setup lang="ts">
import { notification } from 'antdv-next'

const [api, ContextHolder] = notification.useNotification()

const classes = {
  root: 'custom-notification-root',
}

function styleFn(info: any) {
  if (info.props.type === 'error') {
    return {
      root: {
        backgroundColor: 'rgba(255, 200, 200, 0.3)',
      },
    }
  }
  return {}
}

function openDefault() {
  api.info({
    title: 'Notification Title',
    description: 'This is a notification description.',
    duration: false,
    classes,
    styles: {
      root: {
        borderRadius: '8px',
      },
    },
  })
}

function openError() {
  api.error({
    title: 'Notification Title',
    description: 'This is a notification description.',
    duration: false,
    classes,
    styles: styleFn,
  })
}
</script>

<template>
  <ContextHolder />
  <a-space>
    <a-button type="primary" @click="openDefault">
      Default Notification
    </a-button>
    <a-button @click="openError">
      Error Notification
    </a-button>
  </a-space>
</template>

<style>
.custom-notification-root {
  border: 2px dashed #ccc;
}
</style>
```
