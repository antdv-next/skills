# 自定义状态

## Description (zh-CN)

使用 `status` 为 Select 添加状态，可选 `error` 或 `warning`。

## Source

```vue
<script setup lang="ts">
</script>

<template>
  <a-space vertical style="width: 100%">
    <a-select status="error" style="width: 100%" />
    <a-select status="warning" style="width: 100%" />
  </a-space>
</template>
```
