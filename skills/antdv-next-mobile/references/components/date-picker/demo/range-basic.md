# Date range with RangePicker

`DatePicker.RangePicker` (`<am-range-picker>`) is the same as PC: `v-model:value` binds `[start, end]`. Tap the start or the end part of the trigger and the popup lands on that tab; the end never goes before the start, and "OK" commits both sides together.

## Source

```vue
<script setup lang="ts">
import type { Dayjs } from 'dayjs'
import { ref } from 'vue'

const value = ref<[Dayjs | null, Dayjs | null] | null>(null)
</script>

<template>
  <am-flex vertical gap="small">
    <am-range-picker v-model:value="value" title="Select dates" allow-clear />
    <div class="demo-result">
      {{ value ? value.map(date => date?.format('MMM D, YYYY') ?? '-').join(' → ') : 'Not selected' }}
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
