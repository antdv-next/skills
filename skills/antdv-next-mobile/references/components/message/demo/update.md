# Update message content

Update the content with a unique `key`: a message with the same `key` is updated in place instead of adding a new one.

## Source

```vue
<script setup lang="ts">
import { message } from '@antdv-next/mobile'

const key = 'updatable'

function update() {
  message.open({ key, type: 'loading', content: 'Submitting...', duration: 0 })
  setTimeout(() => {
    message.open({ key, type: 'success', content: 'Submitted', duration: 2 })
  }, 1500)
}
</script>

<template>
  <am-button block @click="update">
    Update message
  </am-button>
</template>
```
