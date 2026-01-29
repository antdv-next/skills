# 状态

## Description (zh-CN)

使用 `status` 为 Transfer 添加状态，可选 `error` 或者 `warning`。

## Source

```vue
<script setup lang="ts">
const emptyData: any[] = []
</script>

<template>
  <a-flex vertical gap="middle">
    <a-transfer :data-source="emptyData" status="error" />
    <a-transfer :data-source="emptyData" status="warning" show-search />
  </a-flex>
</template>
```
