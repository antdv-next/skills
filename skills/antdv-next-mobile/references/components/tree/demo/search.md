# Searchable

A searchable tree: compute the parents to expand from the keyword and control `expandedKeys` (with `autoExpandParent`), highlight the matching nodes with `filterTreeNode` and mark the matched text in the `title` slot.

## Source

```vue
<script setup lang="ts">
import type { TreeDataNode, TreeEventDataNode } from '@antdv-next/mobile'
import { ref, watch } from 'vue'

type Key = string | number

const treeData: TreeDataNode[] = [
  {
    key: 'asia',
    title: 'Asia',
    children: [
      { key: 'cn', title: 'China', children: [{ key: 'bj', title: 'Beijing' }, { key: 'sh', title: 'Shanghai' }] },
      { key: 'jp', title: 'Japan', children: [{ key: 'tk', title: 'Tokyo' }, { key: 'os', title: 'Osaka' }] },
    ],
  },
  {
    key: 'europe',
    title: 'Europe',
    children: [
      { key: 'fr', title: 'France', children: [{ key: 'pa', title: 'Paris' }] },
      { key: 'de', title: 'Germany', children: [{ key: 'be', title: 'Berlin' }, { key: 'ha', title: 'Hamburg' }] },
    ],
  },
]

const keyword = ref('')
const expandedKeys = ref<Key[]>(['asia'])
const autoExpandParent = ref(true)

function matches(title: unknown) {
  const value = keyword.value.trim().toLowerCase()
  return !!value && String(title).toLowerCase().includes(value)
}

function collectParents(list: TreeDataNode[], parent: Key | undefined, result: Key[]) {
  list.forEach((node) => {
    if (parent !== undefined && matches(node.title) && !result.includes(parent))
      result.push(parent)
    if (node.children)
      collectParents(node.children, node.key, result)
  })
  return result
}

watch(keyword, () => {
  expandedKeys.value = collectParents(treeData, undefined, [])
  autoExpandParent.value = true
})

function filterTreeNode(node: TreeEventDataNode) {
  return matches(node.title)
}

function split(title: string) {
  const value = keyword.value.trim()
  const index = value ? title.toLowerCase().indexOf(value.toLowerCase()) : -1
  if (index < 0)
    return [title, '', '']
  return [title.slice(0, index), title.slice(index, index + value.length), title.slice(index + value.length)]
}
</script>

<template>
  <am-flex vertical gap="small">
    <am-input v-model:value="keyword" placeholder="Search a place, e.g. ber" allow-clear />
    <am-tree
      v-model:expanded-keys="expandedKeys"
      :tree-data="treeData"
      :auto-expand-parent="autoExpandParent"
      :filter-tree-node="filterTreeNode"
      @expand="autoExpandParent = false"
    >
      <template #title="{ title }">
        <span>{{ split(String(title))[0] }}<mark class="demo-mark">{{ split(String(title))[1] }}</mark>{{ split(String(title))[2] }}</span>
      </template>
    </am-tree>
  </am-flex>
</template>

<style scoped>
.demo-mark {
  color: inherit;
  background: var(--am-color-warning-bg);
  border-radius: 2px;
}
</style>
```
