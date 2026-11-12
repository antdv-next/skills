# Closable and extra action

`closable` shows the close button, and `extra` holds an extra action such as "View details".

## Source

```vue
<script setup lang="ts">
import { RightOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const visible = ref(true)
const count = ref(0)
</script>

<template>
  <am-flex vertical gap="small">
    <am-notice-bar v-if="visible" closable content="Tap the button on the right to close" @close="visible = false" />
    <am-notice-bar color="info" :content="`Tap the notice for details (tapped ${count} times)`" @click="count++">
      <template #extra>
        <RightOutlined />
      </template>
    </am-notice-bar>
    <am-notice-bar color="error" closable content="Extra action with a close button">
      <template #extra>
        <span @click.stop>Details</span>
      </template>
    </am-notice-bar>
    <div v-if="!visible" style="padding: 0 16px">
      <am-button size="small" @click="visible = true">
        Show again
      </am-button>
    </div>
  </am-flex>
</template>
```
