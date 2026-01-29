# 带有参数的

## Description (zh-CN)

带有路由参数的。

## Source

```vue
<script setup lang="ts">
import type { BreadcrumbItemType } from 'antdv-next'

const items: BreadcrumbItemType[] = [
  {
    title: 'Users',
  },
  {
    title: ':id',
    href: '',
  },
]
</script>

<template>
  <a-breadcrumb :items="items" :params="{ id: 1 }" />
</template>
```
