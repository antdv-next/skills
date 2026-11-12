# Disabled time

`disabledTime` works the same as on PC: it returns the hours, minutes and seconds that cannot be selected, and the corresponding options are grayed out and skipped automatically. Use `filter` when you want to hide the options instead.

## Source

```vue
<script setup lang="ts">
import type { PickerOption, TimePickerColumnType } from '@antdv-next/mobile'
import { ref } from 'vue'

const range = (start: number, end: number) => Array.from({ length: end - start }, (_, index) => start + index)

function disabledTime() {
  return {
  // only 9:00 - 18:00 is selectable, 12:00 is the lunch break
    disabledHours: () => [...range(0, 9), 12, ...range(19, 24)],
    disabledMinutes: (hour: number) => (hour === 18 ? range(1, 60) : []),
  }
}

function filter(type: TimePickerColumnType, options: PickerOption[]) {
  return type === 'hour' ? options.filter(option => Number(option.value) >= 9 && Number(option.value) <= 18) : options
}

const a = ref(null)
const b = ref(null)
</script>

<template>
  <am-flex vertical gap="small">
    <am-time-picker v-model:value="a" format="HH:mm" :disabled-time="disabledTime" placeholder="Disabled hours grayed out" />
    <am-time-picker v-model:value="b" format="HH:mm" :disabled-time="disabledTime" :filter="filter" placeholder="Off-hours hidden" />
  </am-flex>
</template>
```
