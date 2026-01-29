# 分隔符

## Description (zh-CN)

使用 `separator=">"` 可以自定义分隔符。

## Source

```vue
<script setup lang="ts">
const items = [
  {
    title: 'Home',
  },
  {
    title: 'Application Center',
    href: '',
  },
  {
    title: 'Application List',
    href: '',
  },
  {
    title: 'An Application',
  },
]
</script>

<template>
  <a-breadcrumb separator=">" :items="items" />
</template>
```
