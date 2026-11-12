# Basic usage

`v-model:value` binds a dayjs object by default, and the default format is `HH:mm:ss`.

## Source

```vue
<script setup lang="ts">
import type { Dayjs } from 'dayjs'
import { ref } from 'vue'

const value = ref<Dayjs | null>(null)
</script>

<template>
  <am-flex vertical gap="small">
    <am-time-picker v-model:value="value" title="Select time" allow-clear />
    <div class="demo-result">
      {{ value ? value.format('HH:mm:ss') : 'Not selected' }}
    </div>
  </am-flex>
</template>

<style scoped>
.demo-result {
  color: var(--am-color-text-tertiary);
  font-size: 13px;
}
</style>
```
