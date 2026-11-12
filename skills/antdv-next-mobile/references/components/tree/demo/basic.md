# Basic

The most basic usage: pass the nodes through `treeData`, tap the arrow to expand / collapse and tap a row to select it. `defaultExpandedKeys` and `defaultSelectedKeys` set the initial state, `disabled` on a node prevents selecting it.

## Source

```vue
<script setup lang="ts">
import type { TreeDataNode } from '@antdv-next/mobile'
import { ref } from 'vue'

const treeData: TreeDataNode[] = [
  {
    key: 'docs',
    title: 'Documents',
    children: [
      {
        key: 'work',
        title: 'Work',
        children: [
          { key: 'report', title: 'Weekly report' },
          { key: 'plan', title: 'Roadmap' },
        ],
      },
      { key: 'notes', title: 'Notes' },
      { key: 'archive', title: 'Archive (disabled)', disabled: true },
    ],
  },
  {
    key: 'photos',
    title: 'Photos',
    children: [
      { key: 'travel', title: 'Travel' },
      { key: 'family', title: 'Family' },
    ],
  },
  { key: 'music', title: 'Music' },
]

const selected = ref<(string | number)[]>(['report'])
</script>

<template>
  <am-flex vertical gap="small">
    <am-tree
      v-model:selected-keys="selected"
      :tree-data="treeData"
      :default-expanded-keys="['work']"
    />
    <div class="demo-result">
      Selected: {{ selected.join(', ') || '-' }}
    </div>
  </am-flex>
</template>

<style scoped>
.demo-result {
  color: var(--am-color-text-tertiary);
  font-size: 13px;
}
</style>
```
