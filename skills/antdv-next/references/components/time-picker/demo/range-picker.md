# 范围选择器

## Description (zh-CN)

通过 `TimePicker.RangePicker` 使用时间范围选择器。

## Source

```vue
<script setup lang="ts">
import dayjs from 'dayjs'

const format = 'HH:mm:ss'
const defaultValue = [dayjs('12:08:23', 'HH:mm:ss'), dayjs('12:08:23', 'HH:mm:ss')]
</script>

<template>
  <a-time-range-picker :default-value="defaultValue" :format="format" />
</template>
```
