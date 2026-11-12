# Large data / virtual scrolling

The month list uses virtual scrolling by default (`virtual`): even with a selectable range of 10 years (120 months, more than 3,600 days), only the few months near the visible area are rendered. `scrollToDate` jumps straight to any date.

## Source

```vue
<script setup lang="ts">
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { ref } from 'vue'

const minDate = dayjs().subtract(5, 'year').startOf('year')
const maxDate = dayjs().add(4, 'year').endOf('year')

const open = ref(false)
const value = ref<Dayjs | null>(null)
const calendarRef = ref<{ scrollToDate: (date: Dayjs) => void }>()
</script>

<template>
  <am-list>
    <am-list-item title="Select a date (10 years)" :extra="value ? value.format('YYYY-MM-DD') : 'Please select'" clickable @click="open = true" />
  </am-list>
  <am-calendar ref="calendarRef" v-model:open="open" v-model:value="value" :min-date="minDate" :max-date="maxDate">
    <template #footer="{ confirm, disabled }">
      <am-flex gap="small">
        <am-button @click="calendarRef?.scrollToDate(minDate)">
          Earliest
        </am-button>
        <am-button @click="calendarRef?.scrollToDate(dayjs())">
          Today
        </am-button>
        <am-button @click="calendarRef?.scrollToDate(maxDate)">
          Latest
        </am-button>
        <am-button type="primary" block :disabled="disabled" @click="confirm">
          OK
        </am-button>
      </am-flex>
    </template>
  </am-calendar>
</template>
```
