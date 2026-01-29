# 三种大小

## Description (zh-CN)

三种大小的输入框，大的用在表单中，中的为默认。

## Source

```vue
<script setup lang="ts">
import dayjs from 'dayjs'

const defaultValue = dayjs('12:08:23', 'HH:mm:ss')
</script>

<template>
  <a-space wrap>
    <a-time-picker :default-value="defaultValue" size="large" />
    <a-time-picker :default-value="defaultValue" />
    <a-time-picker :default-value="defaultValue" size="small" />
  </a-space>
</template>
```
