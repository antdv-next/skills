# 占据整行

## Description (zh-CN)

让节点占据一行。

## Source

```vue
<script setup lang="ts">
import type { TreeDataNode } from 'antdv-next'
import { ref } from 'vue'

const treeData: TreeDataNode[] = [
  {
    title: 'parent',
    key: '0',
    children: [
      {
        title: 'child 1',
        key: '0-0',
        disabled: true,
      },
      {
        title: 'child 2',
        key: '0-1',
        disableCheckbox: true,
      },
    ],
  },
]

const selectedKeys = ref(['0-1'])
</script>

<template>
  <a-tree
    v-model:selected-keys="selectedKeys"
    checkable
    default-expand-all
    :tree-data="treeData"
    block-node
  />
</template>
```
