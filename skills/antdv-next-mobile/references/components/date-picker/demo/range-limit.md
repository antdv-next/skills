# Range limits, empty and disabled sides

`minDate` / `maxDate` bound both sides. `allowEmpty` lets a side stay empty: a side without a value whose tab was never opened is committed as `null`. Pass `[boolean, boolean]` to `disabled` to disable one side only; the disabled side keeps its value.

## Source

```vue
<script setup lang="ts">
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { ref } from 'vue'

type RangeValue = [Dayjs | null, Dayjs | null] | null

const minDate = dayjs()
const maxDate = dayjs().add(3, 'month')
const booking = ref<RangeValue>(null)
const openEnded = ref<RangeValue>(null)
const fixedStart = ref<RangeValue>([dayjs(), dayjs().add(7, 'day')])
</script>

<template>
  <am-flex vertical gap="small">
    <am-range-picker
      v-model:value="booking"
      :min-date="minDate"
      :max-date="maxDate"
      :placeholder="['Check-in', 'Check-out']"
      title="Next 3 months"
    />
    <am-range-picker v-model:value="openEnded" :allow-empty="[false, true]" :placeholder="['Start date', 'No end date']" allow-clear />
    <am-range-picker v-model:value="fixedStart" :disabled="[true, false]" />
    <am-range-picker :default-value="fixedStart" disabled />
  </am-flex>
</template>
```
