# Controlled

`expandedKeys`, `selectedKeys` and `checkedKeys` can all be controlled (`v-model`), so you can expand all, collapse all or clear the checked nodes from outside. When the expanded keys are controlled, turn `autoExpandParent` off in the `expand` event, otherwise a parent can not be collapsed.

## Source

```vue
<script setup lang="ts">
import type { TreeDataNode } from '@antdv-next/mobile'
import { ref } from 'vue'

type Key = string | number

const treeData: TreeDataNode[] = [
  {
    key: '0-0',
    title: 'Region East',
    children: [
      {
        key: '0-0-0',
        title: 'Shanghai',
        children: [
          { key: '0-0-0-0', title: 'Store 01' },
          { key: '0-0-0-1', title: 'Store 02' },
        ],
      },
      { key: '0-0-1', title: 'Hangzhou', children: [{ key: '0-0-1-0', title: 'Store 03' }] },
    ],
  },
  {
    key: '0-1',
    title: 'Region South',
    children: [
      { key: '0-1-0', title: 'Shenzhen' },
      { key: '0-1-1', title: 'Guangzhou' },
    ],
  },
]

const parentKeys: Key[] = ['0-0', '0-0-0', '0-0-1', '0-1']

const expandedKeys = ref<Key[]>(['0-0-0'])
const selectedKeys = ref<Key[]>([])
const checkedKeys = ref<Key[]>(['0-0-0-0'])
const autoExpandParent = ref(true)

function setExpanded(keys: Key[]) {
  expandedKeys.value = keys
  autoExpandParent.value = false
}
</script>

<template>
  <am-flex vertical gap="small">
    <am-flex gap="small" wrap>
      <am-button size="small" @click="setExpanded(parentKeys)">
        Expand all
      </am-button>
      <am-button size="small" @click="setExpanded([])">
        Collapse all
      </am-button>
      <am-button size="small" @click="checkedKeys = []">
        Clear checked
      </am-button>
    </am-flex>
    <am-tree
      v-model:expanded-keys="expandedKeys"
      v-model:selected-keys="selectedKeys"
      v-model:checked-keys="checkedKeys"
      :tree-data="treeData"
      :auto-expand-parent="autoExpandParent"
      checkable
      @expand="autoExpandParent = false"
    />
    <div class="demo-result">
      Expanded: {{ expandedKeys.length }} · Selected: {{ selectedKeys.join(', ') || '-' }} · Checked: {{ checkedKeys.length }}
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
