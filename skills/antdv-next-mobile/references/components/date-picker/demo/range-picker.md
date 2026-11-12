# Range precision and format

`picker` switches the precision of the range and `showTime` adds time wheels; with `valueFormat` both sides are bound as formatted strings, `separator` customizes the separator.

## Source

```vue
<script setup lang="ts">
import type { Dayjs } from 'dayjs'
import { ref } from 'vue'

type RangeValue = [Dayjs | null, Dayjs | null] | null

const month = ref<RangeValue>(null)
const year = ref<RangeValue>(null)
const dateTime = ref<RangeValue>(null)
const time = ref<[string | null, string | null] | null>(['09:00', '18:00'])
</script>

<template>
  <am-flex vertical gap="small">
    <am-range-picker v-model:value="month" picker="month" :placeholder="['Start month', 'End month']" />
    <am-range-picker v-model:value="year" picker="year" :placeholder="['Start year', 'End year']" separator="~" />
    <am-range-picker
      v-model:value="dateTime"
      :show-time="{ format: 'HH:mm' }"
      format="MM-DD HH:mm"
      :placeholder="['Start time', 'End time']"
    />
    <am-range-picker v-model:value="time" picker="time" format="HH:mm" value-format="HH:mm" separator="to" />
    <div class="demo-result">
      Opening hours: {{ time ? time.join(' - ') : 'Not set' }}
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
