# 禁用

## Description (zh-CN)

选择框的不可用状态。你也可以通过数组单独禁用 RangePicker 的其中一项。

## Source

```vue
<script setup lang="ts">
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { shallowRef } from 'vue'

dayjs.extend(customParseFormat)

const dateFormat = 'YYYY-MM-DD'
const disabledDateValue = shallowRef(dayjs('2015-06-06', dateFormat))
const disabledMonthValue = shallowRef(dayjs('2015-06', 'YYYY-MM'))
const disabledRangeValue = shallowRef([
  dayjs('2015-06-06', dateFormat),
  dayjs('2015-06-06', dateFormat),
])
const partiallyDisabledRangeValue = shallowRef([
  dayjs('2019-09-03', dateFormat),
  dayjs('2019-11-22', dateFormat),
])
const minMaxValue = shallowRef(dayjs('2019-09-03', dateFormat))
</script>

<template>
  <a-space vertical :size="12">
    <a-date-picker v-model:value="disabledDateValue" disabled />
    <a-date-picker v-model:value="disabledMonthValue" picker="month" disabled />
    <a-range-picker
      v-model:value="disabledRangeValue"
      disabled
    />
    <a-range-picker
      v-model:value="partiallyDisabledRangeValue"
      :disabled="[false, true]"
    />
    <a-date-picker
      v-model:value="minMaxValue"
      :min-date="dayjs('2019-06-01', dateFormat)"
      :max-date="dayjs('2020-06-30', dateFormat)"
    />
  </a-space>
</template>
```
