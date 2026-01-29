# 选择确认

## Description (zh-CN)

DatePicker 默认会根据 `picker` 的交互行为，自动选择是否需要确认按钮。你也可以通过 `needConfirm` 属性来手动设置是否需要确认按钮。当有 `needConfirm` 时，用户始终需要点击确认按钮才能完成选择。反之，则会在选择或者失去焦点时提交。

## Source

```vue
<script setup lang="ts">
import type { DatePickerProps } from 'antdv-next'
import type { Dayjs } from 'dayjs'

const handleChange: DatePickerProps<Dayjs, false>['onChange'] = (date, dateString) => {
  console.log(date, dateString)
}
</script>

<template>
  <a-date-picker need-confirm @change="handleChange" />
</template>
```
