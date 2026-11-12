# Format and step

`format` determines both the display format and the wheel columns, e.g. `HH:mm` shows only the hour and minute columns. `hourStep` / `minuteStep` / `secondStep` set the interval between options.

## Source

```vue
<script setup lang="ts">
import dayjs from 'dayjs'
import { ref } from 'vue'

const value = ref(dayjs().hour(8).minute(30))
const step = ref(null)
</script>

<template>
  <am-flex vertical gap="small">
    <am-time-picker v-model:value="value" format="HH:mm" title="Work starts" />
    <am-time-picker v-model:value="step" format="HH:mm" :minute-step="15" title="15-minute steps" placeholder="15-minute steps" />
  </am-flex>
</template>
```
