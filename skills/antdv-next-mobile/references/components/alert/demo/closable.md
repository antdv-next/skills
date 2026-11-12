# Closable

Show a close button. Clicking it plays a collapse animation; the `close` and `afterClose` events are triggered on click and when the animation ends respectively.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(true)
const log = ref('Tap the close button on the right')
</script>

<template>
  <am-flex vertical gap="small">
    <am-alert
      v-if="visible"
      title="Warning Text"
      type="warning"
      show-icon
      closable
      @close="log = 'close triggered'"
      @after-close="log = 'afterClose triggered'; visible = false"
    />
    <am-alert
      title="Custom close text"
      description="closeIcon can be any node. The close button is shown once it is set."
      type="info"
      close-icon="Got it"
    />
    <am-flex align="center" justify="space-between">
      <span class="log">{{ log }}</span>
      <am-button size="small" :disabled="visible" @click="visible = true">
        Show again
      </am-button>
    </am-flex>
  </am-flex>
</template>

<style scoped>
.log {
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size);
}
</style>
```
