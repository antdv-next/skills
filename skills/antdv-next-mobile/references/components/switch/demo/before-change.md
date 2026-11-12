# Async control

`beforeChange` is called before toggling; when it returns a Promise the switch enters the loading state automatically, and resolving `false` or rejecting cancels the toggle. Suitable for "request the API first, then toggle on success" scenarios.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const success = ref(false)
const fail = ref(false)

function requestOk() {
  return new Promise<void>(resolve => setTimeout(resolve, 1000))
}

function requestFail() {
  return new Promise<boolean>(resolve => setTimeout(() => resolve(false), 1000))
}
</script>

<template>
  <am-flex vertical gap="middle">
    <am-flex align="center" gap="small">
      <am-switch v-model:checked="success" :before-change="requestOk" />
      <span>Succeeds after 1s</span>
    </am-flex>
    <am-flex align="center" gap="small">
      <am-switch v-model:checked="fail" :before-change="requestFail" />
      <span>Fails after 1s, state is kept</span>
    </am-flex>
  </am-flex>
</template>
```
