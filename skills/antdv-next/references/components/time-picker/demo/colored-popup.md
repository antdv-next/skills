# colored-popup

## Description (zh-CN)

将自定义 class 传给 `TimePicker` 弹框。

## Source

```vue
<script setup lang="ts">
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

const defaultOpenValue = dayjs('00:00:00', 'HH:mm:ss')

function onChange(time: any, timeString: string) {
  console.log(time, timeString)
}
</script>

<template>
  <a-time-picker
    :default-open-value="defaultOpenValue"
    :classes="{ popup: { root: 'myCustomClassName' } }"
    @change="onChange"
  />
</template>
```
