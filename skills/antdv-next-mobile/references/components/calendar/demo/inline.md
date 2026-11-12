# Inline display

With `:poppable="false"` the calendar is embedded in the page directly and its height is controlled by `--am-calendar-height`. `scrollToDate` and `reset` can be called on the component instance.

## Source

```vue
<script setup lang="ts">
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { ref } from 'vue'

const calendarRef = ref()
const value = ref<Dayjs[] | null>(null)
</script>

<template>
  <am-calendar
    ref="calendarRef"
    v-model:value="value"
    :poppable="false"
    selection-mode="range"
    :show-title="false"
    :row-height="56"
    class="demo-inline-calendar"
  >
    <template #footer="{ confirm, disabled }">
      <am-flex gap="small">
        <am-button @click="calendarRef?.scrollToDate(dayjs().add(3, 'month'))">
          In 3 months
        </am-button>
        <am-button @click="calendarRef?.reset()">
          Reset
        </am-button>
        <am-button type="primary" :disabled="disabled" style="flex: 1" @click="confirm">
          {{ value?.length ? value.map(date => date.format('M/D')).join(' - ') : 'OK' }}
        </am-button>
      </am-flex>
    </template>
  </am-calendar>
</template>

<style scoped>
.demo-inline-calendar {
  --am-calendar-height: 420px;
}
</style>
```
