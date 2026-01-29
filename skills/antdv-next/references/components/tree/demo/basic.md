# 基本

## Description (zh-CN)

最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。

## Source

```vue
<script setup lang="ts">
import type { TreeDataNode, TreeEmits } from 'antdv-next'
import { ref } from 'vue'

const treeData: TreeDataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: 'sss', key: '0-0-1-0' }],
      },
    ],
  },
]
const expandedKeys = ref(['0-0-0', '0-0-1'])
const selectedKeys = ref(['0-0-1'])
const checkedKeys = ref(['0-0-0', '0-0-1'])
const onSelect: TreeEmits['select'] = (selectedKeys, info) => {
  console.log('selected', selectedKeys, info)
}

const onCheck: TreeEmits['check'] = (checkedKeys, info) => {
  console.log('onCheck', checkedKeys, info)
}
</script>

<template>
  <a-tree
    v-model:expanded-keys="expandedKeys"
    v-model:selected-keys="selectedKeys"
    v-model:checked-keys="checkedKeys"
    checkable
    :tree-data="treeData"
    @select="onSelect"
    @check="onCheck"
  >
    <template #titleRender="{ key, title }">
      <template v-if="key === '0-0-1-0'">
        <span style="color: #1677ff">{{ title }}</span>
      </template>
    </template>
  </a-tree>
</template>
```
