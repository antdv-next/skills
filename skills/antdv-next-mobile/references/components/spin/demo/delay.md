# Delay

With `delay` set, requests that finish sooner than the delay show no loading effect, which avoids flashing.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)

function request(duration: number) {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, duration)
}
</script>

<template>
  <am-flex vertical gap="middle">
    <am-spin :spinning="loading" :delay="500">
      <div class="delay-box">
        Loading shows after 500ms
      </div>
    </am-spin>
    <am-flex gap="small">
      <am-button block @click="request(300)">
        Request 300ms
      </am-button>
      <am-button type="primary" block @click="request(2000)">
        Request 2s
      </am-button>
    </am-flex>
  </am-flex>
</template>

<style scoped>
.delay-box {
  padding: 32px 16px;
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size);
  text-align: center;
  background: var(--am-color-fill-quaternary);
  border-radius: var(--am-border-radius);
}
</style>
```
