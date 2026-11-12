# Filter options and custom labels

`filter` filters or reorders the options of a column (a value that is filtered out is corrected to the nearest option automatically), and `renderLabel` customizes the option text.

## Source

```vue
<script setup lang="ts">
import type { DatePickerColumnType, PickerOption } from '@antdv-next/mobile'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { ref } from 'vue'

const value = ref(dayjs().hour(9).minute(0))

function filter(type: DatePickerColumnType, options: PickerOption[]) {
  // Business hours 9:00 - 18:00, in half-hour steps
  if (type === 'hour')
    return options.filter(option => Number(option.value) >= 9 && Number(option.value) <= 18)
  if (type === 'minute')
    return options.filter(option => Number(option.value) % 30 === 0)
  return options
}

const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
function renderLabel(type: DatePickerColumnType, val: number) {
  if (type === 'month')
    return monthNames[val - 1]
  if (type === 'day' || type === 'hour' || type === 'minute')
    return String(val).padStart(2, '0')
  return val
}

const format = (date: Dayjs) => `${weekNames[date.day()]}, ${monthNames[date.month()]} ${date.format('D HH:mm')}`
</script>

<template>
  <am-date-picker
    v-model:value="value"
    :show-time="{ format: 'HH:mm' }"
    :filter="filter"
    :render-label="renderLabel"
    :format="format"
    title="Arrival time"
  />
</template>
```
