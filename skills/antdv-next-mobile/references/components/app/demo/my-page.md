# my-page

## Source

```vue
<script setup lang="ts">
import { App } from '@antdv-next/mobile'

const { message, notification, modal, toast } = App.useApp()

function showMessage() {
  message.success('Saved')
}

function showNotification() {
  notification.info({
    title: 'New version',
    description: 'Version 2.0 is ready to install.',
  })
}

function showModal() {
  modal.confirm({
    title: 'Delete this draft?',
    content: 'This action cannot be undone.',
  })
}

function showToast() {
  toast.show('Copied')
}
</script>

<template>
  <am-flex gap="small" wrap>
    <am-button type="primary" @click="showMessage">
      Message
    </am-button>
    <am-button type="primary" @click="showNotification">
      Notification
    </am-button>
    <am-button type="primary" @click="showModal">
      Modal
    </am-button>
    <am-button type="primary" @click="showToast">
      Toast
    </am-button>
  </am-flex>
</template>
```
