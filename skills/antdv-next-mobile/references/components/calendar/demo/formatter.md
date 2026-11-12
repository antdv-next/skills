# Custom date content

`formatter` sets the top / bottom info of each date (holidays, prices, check-in / check-out, etc.); the `cellRender` slot takes over the cell content entirely.

## Source

```vue
<script setup lang="ts">
import type { CalendarDay } from '@antdv-next/mobile'
import type { Dayjs } from 'dayjs'
import { ref } from 'vue'

const hotelOpen = ref(false)
const hotel = ref<Dayjs[] | null>(null)

function formatter(day: CalendarDay): CalendarDay {
  const weekend = day.date.day() === 0 || day.date.day() === 6
  if (day.type === 'start')
    return { ...day, bottomInfo: 'In' }
  if (day.type === 'end')
    return { ...day, bottomInfo: 'Out' }
  if (day.type === 'disabled')
    return day
  return { ...day, bottomInfo: weekend ? '¥468' : '¥328', className: weekend ? 'demo-weekend' : undefined }
}

const signOpen = ref(false)
const signed = [1, 2, 3, 5, 8, 9]
</script>

<template>
  <am-list>
    <am-list-item
      title="Hotel booking"
      :extra="hotel?.length ? hotel.map(date => date.format('M/D')).join(' - ') : 'Check-in - Check-out'"
      clickable
      @click="hotelOpen = true"
    />
    <am-list-item title="Sign-in calendar" extra="cellRender slot" clickable @click="signOpen = true" />
  </am-list>
  <am-calendar v-model:open="hotelOpen" v-model:value="hotel" selection-mode="range" :formatter="formatter" title="Select your stay" />
  <am-calendar v-model:open="signOpen" title="Sign-in calendar" :show-confirm="false" :show-mark="false">
    <template #cellRender="{ day }">
      <span>{{ day.text }}</span>
      <span class="demo-sign" :class="{ 'demo-sign-done': signed.includes(day.date.date()) }" />
    </template>
  </am-calendar>
</template>

<style>
.demo-weekend .am-calendar-day-bottom {
  color: var(--am-color-error);
}

.demo-sign {
  width: 6px;
  height: 6px;
  margin-top: 4px;
  border-radius: 50%;
}

.demo-sign-done {
  background: var(--am-color-success);
}
</style>
```
