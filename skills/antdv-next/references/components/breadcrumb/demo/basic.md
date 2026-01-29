# 基本

## Description (zh-CN)

最简单的用法。

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
  <a-breadcrumb :items="items" />
</template>
```
