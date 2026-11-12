# Range, disabling and quick selection

`minDate` / `maxDate` set the selectable range (months are rendered on demand, so even a huge range stays smooth), `disabledDate` disables specific dates, `maxRange` limits the number of days in a range, `weekStartsOn` sets the first day of the week, and `:show-confirm="false"` commits as soon as the selection is complete.

## Source

```vue
<script setup lang="ts">
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { ref } from 'vue'

function fmt(value: Dayjs | Dayjs[] | null) {
  if (!value || (Array.isArray(value) && !value.length))
    return 'Please select'
  return Array.isArray(value) ? value.map(date => date.format('M/D')).join(' - ') : value.format('YYYY-MM-DD')
}

const openA = ref(false)
const a = ref<Dayjs | null>(null)
const minDate = dayjs().subtract(5, 'year').startOf('year')
const maxDate = dayjs().add(5, 'year').endOf('year')

const openB = ref(false)
const b = ref<Dayjs | null>(null)
const disabledDate = (date: Dayjs) => date.day() === 0 || date.day() === 6

const openC = ref(false)
const c = ref<Dayjs[] | null>(null)

const openD = ref(false)
const d = ref<Dayjs | null>(null)
</script>

<template>
  <am-list>
    <am-list-item title="5 years around (120 months)" :extra="fmt(a)" clickable @click="openA = true" />
    <am-list-item title="Weekends disabled" :extra="fmt(b)" clickable @click="openB = true" />
    <am-list-item title="Up to 7 days" :extra="fmt(c)" clickable @click="openC = true" />
    <am-list-item title="Monday first + presets" :extra="fmt(d)" clickable @click="openD = true" />
  </am-list>
  <am-calendar v-model:open="openA" v-model:value="a" :min-date="minDate" :max-date="maxDate" />
  <am-calendar v-model:open="openB" v-model:value="b" :disabled-date="disabledDate" />
  <am-calendar v-model:open="openC" v-model:value="c" selection-mode="range" :max-range="7" />
  <am-calendar v-model:open="openD" v-model:value="d" :week-starts-on="1" :show-confirm="false" />
</template>
```
