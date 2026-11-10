# 12 hours

## Description (en-US)

TimePicker of 12 hours format, with default format `h:mm:ss a`.

## Source

```vue
<script setup lang="ts">
import type { TimePickerEmits } from 'antdv-next'

const onChange: TimePickerEmits['change'] = (time, timeString) => {
  console.log(time, timeString)
}
</script>

<template>
  <a-space wrap>
    <a-time-picker use12-hours @change="onChange" />
    <a-time-picker use12-hours format="h:mm:ss A" @change="onChange" />
    <a-time-picker use12-hours format="h:mm a" @change="onChange" />
  </a-space>
</template>
```
