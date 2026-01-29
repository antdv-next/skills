# 手风琴

## Description (zh-CN)

手风琴模式，始终只有一个面板处在激活状态。

## Source

```vue
<script setup lang="ts">
import { h } from 'vue'

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    content: h('p', text),
  },
  {
    key: '2',
    label: 'This is panel header 2',
    content: h('p', text),
  },
  {
    key: '3',
    label: 'This is panel header 3',
    content: h('p', text),
  },
]
</script>

<template>
  <a-collapse accordion :items="items" />
</template>
```
