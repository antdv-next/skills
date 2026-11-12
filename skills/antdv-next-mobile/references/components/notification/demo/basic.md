# Basic usage

The most basic notification: it slides in from the top and closes after 4.5 seconds. Swipe it up or sideways to dismiss it earlier; a tap fires `onClick`.

## Source

```vue
<script setup lang="ts">
import { message, notification } from '@antdv-next/mobile'

function open() {
  notification.open({
    title: 'New message',
    description: 'Alice: are you coming to the meeting at 3 pm?',
    onClick: () => message.info('Notification tapped'),
  })
}
</script>

<template>
  <am-button type="primary" block @click="open">
    Open notification
  </am-button>
</template>
```
