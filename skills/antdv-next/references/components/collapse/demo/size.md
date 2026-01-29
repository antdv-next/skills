# 面板尺寸

## Description (zh-CN)

折叠面板有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把折叠面板设为大、小尺寸。若不设置 `size`，则尺寸默认为中。

## Source

```vue
<script setup lang="ts">
import { h } from 'vue'

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const defaultItems = [
  {
    key: '1',
    label: 'This is default size panel header',
    content: h('p', text),
  },
]

const smallItems = [
  {
    key: '1',
    label: 'This is small size panel header',
    content: h('p', text),
  },
]

const largeItems = [
  {
    key: '1',
    label: 'This is large size panel header',
    content: h('p', text),
  },
]
</script>

<template>
  <a-divider title-placement="start">
    Default Size
  </a-divider>
  <a-collapse :items="defaultItems" />
  <a-divider title-placement="start">
    Small Size
  </a-divider>
  <a-collapse size="small" :items="smallItems" />
  <a-divider title-placement="start">
    Large Size
  </a-divider>
  <a-collapse size="large" :items="largeItems" />
</template>
```
