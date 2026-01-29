# 自定义状态

## Description (zh-CN)

使用 `status` 为 TimePicker 添加状态，可选 `error` 或者 `warning`。

## Source

```vue
<script setup lang="ts">
</script>

<template>
  <a-space vertical>
    <a-time-picker status="error" />
    <a-time-picker status="warning" />
    <a-time-range-picker status="error" />
    <a-time-range-picker status="warning" />
  </a-space>
</template>
```
