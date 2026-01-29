# 折叠面板

## Description (zh-CN)

可以同时展开多个面板，这个例子默认展开了第一个。

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

function onChange(key: string[]) {
  console.log(key)
}
</script>

<template>
  <a-collapse :items="items" :default-active-key="['1']" @change="onChange" />
</template>
```
