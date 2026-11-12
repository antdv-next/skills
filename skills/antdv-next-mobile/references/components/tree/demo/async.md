# Load data asynchronously

`loadData` loads the children when a node is expanded: the arrow turns into a spinner while loading, and the children are written back into `treeData` when it is done. Nodes with `isLeaf: true` never load; when the load fails (the Promise rejects) the node collapses again and the next tap retries.

## Source

```vue
<script setup lang="ts">
import type { TreeDataNode, TreeEventDataNode } from '@antdv-next/mobile'
import { shallowRef } from 'vue'

const treeData = shallowRef<TreeDataNode[]>([
  { key: '0', title: 'Department A' },
  { key: '1', title: 'Department B' },
  { key: '2', title: 'Guest (leaf)', isLeaf: true },
])

function updateChildren(list: TreeDataNode[], key: string | number, children: TreeDataNode[]): TreeDataNode[] {
  return list.map((node) => {
    if (node.key === key)
      return { ...node, children }
    return node.children ? { ...node, children: updateChildren(node.children, key, children) } : node
  })
}

function loadData(node: TreeEventDataNode) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      const depth = String(node.key).split('-').length
      treeData.value = updateChildren(treeData.value, node.key, [
        { key: `${node.key}-0`, title: `Team ${node.key}-0`, isLeaf: depth >= 2 },
        { key: `${node.key}-1`, title: `Team ${node.key}-1`, isLeaf: depth >= 2 },
      ])
      resolve()
    }, 800)
  })
}
</script>

<template>
  <am-tree :tree-data="treeData" :load-data="loadData" />
</template>
```
