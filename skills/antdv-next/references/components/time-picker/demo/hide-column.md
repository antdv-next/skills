# 选择时分

## Description (zh-CN)

TimePicker 浮层中的列会随着 `format` 变化，当略去 `format` 中的某部分时，浮层中对应的列也会消失。

## Source

```vue
<script setup lang="ts">
import dayjs from 'dayjs'

const format = 'HH:mm'
const defaultValue = dayjs('12:08', format)
</script>

<template>
  <a-time-picker :default-value="defaultValue" :format="format" />
</template>
```
