# Select a date range

`selection-mode="range"` selects a date range: tap the start date first, then the end date. `allow-same-day` allows the start and the end to be the same day.

## Source

```vue
<script setup lang="ts">
import type { Dayjs } from 'dayjs'
import { computed, ref } from 'vue'

const open = ref(false)
const range = ref<Dayjs[] | null>(null)
const text = computed(() => (range.value?.length ? range.value.map(date => date.format('M/D')).join(' - ') : 'Please select'))

const sameDayOpen = ref(false)
const sameDay = ref<Dayjs[] | null>(null)
const sameDayText = computed(() => (sameDay.value?.length ? sameDay.value.map(date => date.format('M/D')).join(' - ') : 'Please select'))
</script>

<template>
  <am-list>
    <am-list-item title="Select a date range" :extra="text" clickable @click="open = true" />
    <am-list-item title="Allow same day" :extra="sameDayText" clickable @click="sameDayOpen = true" />
  </am-list>
  <am-calendar v-model:open="open" v-model:value="range" selection-mode="range" title="Select your stay" />
  <am-calendar v-model:open="sameDayOpen" v-model:value="sameDay" selection-mode="range" allow-same-day />
</template>
```
