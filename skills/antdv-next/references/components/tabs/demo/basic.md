# 基本

## Description (zh-CN)

默认选中第一项。

## Source

```vue
<script setup lang="ts">
import type { TabsProps } from 'antdv-next'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    content: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    content: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    content: 'Content of Tab Pane 3',
  },
]
</script>

<template>
  <a-tabs :items="items" />
</template>
```
