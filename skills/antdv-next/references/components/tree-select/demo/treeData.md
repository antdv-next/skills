# 从数据直接生成

## Description (zh-CN)

使用 `treeData` 把 JSON 数据直接生成树结构。

## Source

```vue
<script setup lang="ts">
import type { TreeSelectEmits } from 'antdv-next'
import { ref } from 'vue'

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
]

const value = ref<string>()

const onChange: TreeSelectEmits['change'] = (newValue) => {
  console.log(newValue)
}
</script>

<template>
  <a-tree-select
    v-model:value="value"
    style="width: 100%"
    :styles="{
      popup: {
        root: {
          maxHeight: '400px',
          overflow: 'auto',
        },
      },
    }"
    :tree-data="treeData"
    placeholder="Please select"
    tree-default-expand-all
    @change="onChange"
  />
</template>
```
