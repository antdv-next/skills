# Custom action buttons

Put buttons at the bottom of the notification with `actions` to offer the next step. `notification.destroy(key)` closes a given notification.

## Source

```vue
<script setup lang="ts">
import { Button, message, notification } from '@antdv-next/mobile'
import { h } from 'vue'

function open() {
  const key = `invite-${Date.now()}`
  const close = (text: string) => {
    notification.destroy(key)
    message.success(text)
  }
  notification.open({
    key,
    title: 'Team invitation',
    description: 'Bob invited you to join the Design team.',
    duration: 0,
    actions: () => [
      h(Button, { size: 'small', onClick: () => close('Declined') }, () => 'Decline'),
      h(Button, { size: 'small', type: 'primary', onClick: () => close('Joined') }, () => 'Accept'),
    ],
  })
}
</script>

<template>
  <am-button type="primary" block @click="open">
    Notification with actions
  </am-button>
</template>
```
