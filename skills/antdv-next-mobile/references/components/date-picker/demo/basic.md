# Basic usage

Same as PC, `v-model:value` binds a dayjs object by default. Tap "OK" to commit, tap "Cancel" or the mask to discard.

## Source

```vue
<script setup lang="ts">
import type { Dayjs } from 'dayjs'
import { ref } from 'vue'

const value = ref<Dayjs | null>(null)
</script>

<template>
  <am-flex vertical gap="small">
    <am-date-picker v-model:value="value" title="Select date" allow-clear />
    <div class="demo-result">
      {{ value ? value.format('YYYY-MM-DD dddd') : 'Not selected' }}
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
