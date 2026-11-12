# Progress

With `percent` set, the default indicator shows the current progress.

## Source

```vue
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const percent = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    percent.value = percent.value >= 100 ? 0 : percent.value + 10
  }, 500)
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <am-flex gap="large" align="center">
    <am-spin size="small" :percent="percent" />
    <am-spin :percent="percent" />
    <am-spin size="large" :percent="percent" :description="`${percent}%`" />
  </am-flex>
</template>
```
