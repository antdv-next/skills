# Other status

Control the state with `status`: `active`, `expired`, `loading`, `scanned`. The expired state shows a refresh action once the `refresh` event is listened to.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = 'https://www.antdv-next.com'
const status = ref<'expired' | 'loading' | 'active'>('expired')

function refresh() {
  status.value = 'loading'
  setTimeout(() => {
    status.value = 'active'
  }, 1000)
}
</script>

<template>
  <am-flex wrap gap="middle" justify="center">
    <am-qrcode :value="value" :size="150" status="loading" />
    <am-qrcode :value="value" :size="150" status="scanned" />
    <am-qrcode :value="value" :size="150" :status="status" @refresh="refresh" />
    <am-qrcode :value="value" :size="150" status="expired" />
  </am-flex>
</template>
```
