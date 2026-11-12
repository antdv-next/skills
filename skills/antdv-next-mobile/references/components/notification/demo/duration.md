# Duration after which it closes

Change the delay (in seconds) with `duration`. `0` keeps the notification open until it is closed with the close button or a swipe. `showProgress` shows a progress bar of the remaining time; the timer pauses while the notification is touched.

## Source

```vue
<script setup lang="ts">
import { notification } from '@antdv-next/mobile'

function sticky() {
  notification.warning({
    title: 'Storage almost full',
    description: 'I stay here until you close me.',
    duration: 0,
  })
}

function progress() {
  notification.info({
    title: 'Backup started',
    description: 'Touch and hold to pause the timer.',
    duration: 6,
    showProgress: true,
  })
}
</script>

<template>
  <am-flex vertical gap="small">
    <am-button block @click="sticky">
      Never close automatically
    </am-button>
    <am-button block @click="progress">
      6 seconds with progress
    </am-button>
  </am-flex>
</template>
```
