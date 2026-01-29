# 位置偏移

## Description (zh-CN)

设置状态点的位置偏移，格式为 `[left, top]`，表示状态点距默认位置左侧、上方的偏移量。

## Source

```vue
<script setup lang="ts">
</script>

<template>
  <a-badge :count="5" :offset="[10, 10]">
    <a-avatar shape="square" size="large" />
  </a-badge>
</template>
```
