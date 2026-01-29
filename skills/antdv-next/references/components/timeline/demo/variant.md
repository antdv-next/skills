# 变体样式

## Description (zh-CN)

通过 `variant` 设置时间轴的样式。

## Source

```vue
<script setup lang="ts">
const items = [
  {
    content: 'Create a services site 2015-09-01',
  },
  {
    content: 'Solve initial network problems 2015-09-01',
  },
  {
    content: 'Technical testing 2015-09-01',
  },
  {
    content: 'Network problems being solved 2015-09-01',
  },
]
</script>

<template>
  <a-timeline variant="filled" :items="items" />
</template>
```
