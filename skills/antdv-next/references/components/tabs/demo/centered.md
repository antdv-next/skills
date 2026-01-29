# 居中

## Description (zh-CN)

标签居中展示。

## Source

```vue
<script setup lang="ts">
import type { TabsProps } from 'antdv-next'

const items: TabsProps['items'] = Array.from({ length: 3 }).map((_, i) => {
  const id = String(i + 1)
  return {
    key: id,
    label: `Tab ${id}`,
    content: `Content of Tab Pane ${id}`,
  }
})
</script>

<template>
  <a-tabs centered :items="items" />
</template>
```
