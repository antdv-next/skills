# 大小

## Description (zh-CN)

可以设置有数字徽标的大小。

## Source

```vue
<script setup lang="ts">
</script>

<template>
  <a-space size="middle">
    <a-badge size="default" :count="5">
      <a-avatar shape="square" size="large" />
    </a-badge>
    <a-badge size="small" :count="5">
      <a-avatar shape="square" size="large" />
    </a-badge>
  </a-space>
</template>
```
