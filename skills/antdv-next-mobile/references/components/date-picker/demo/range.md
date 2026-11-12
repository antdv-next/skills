# Selectable range and disabled dates

`minDate` / `maxDate` limit the range of the wheels; when the year or month is switched, the date is clamped back into the range automatically. Dates matched by `disabledDate` are grayed out and cannot be settled on.

## Source

```vue
<script setup lang="ts">
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { ref } from 'vue'

const minDate = dayjs()
const maxDate = dayjs().add(3, 'month')
const value = ref<Dayjs | null>(null)

// Weekends cannot be booked
const disabledDate = (date: Dayjs) => date.day() === 0 || date.day() === 6
</script>

<template>
  <am-flex vertical gap="small">
    <am-date-picker
      v-model:value="value"
      :min-date="minDate"
      :max-date="maxDate"
      :disabled-date="disabledDate"
      title="Booking date (weekdays)"
      placeholder="Weekdays in the next 3 months"
    />
    <div class="demo-result">
      Range: {{ minDate.format('YYYY-MM-DD') }} ~ {{ maxDate.format('YYYY-MM-DD') }}
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
