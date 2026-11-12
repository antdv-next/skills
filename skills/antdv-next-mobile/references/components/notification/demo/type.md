# Notification with icon

A notification comes in four types with an icon: `success`, `info`, `warning` and `error`. The icon can also be customized with `icon`.

## Source

```vue
<script setup lang="ts">
import type { NotificationIconType } from '@antdv-next/mobile'
import { SmileOutlined } from '@antdv-next/icons'
import { notification } from '@antdv-next/mobile'
import { h } from 'vue'

function open(type: NotificationIconType) {
  notification[type]({
    title: 'Order update',
    description: `This is a notification of type ${type}.`,
  })
}

function custom() {
  notification.open({
    title: 'Welcome back',
    description: 'You have 3 unread messages.',
    icon: () => h(SmileOutlined, { style: { color: 'var(--am-color-primary)' } }),
  })
}
</script>

<template>
  <am-flex gap="small" wrap>
    <am-button @click="open('success')">
      Success
    </am-button>
    <am-button @click="open('info')">
      Info
    </am-button>
    <am-button @click="open('warning')">
      Warning
    </am-button>
    <am-button @click="open('error')">
      Error
    </am-button>
    <am-button @click="custom">
      Custom icon
    </am-button>
  </am-flex>
</template>
```
