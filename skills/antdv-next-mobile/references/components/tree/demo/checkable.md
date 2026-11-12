# Checkable

`checkable` shows a checkbox (the Checkbox visuals) in front of every node, and parents and children are linked: a parent is checked when all its children are, and half checked when only some are. Nodes with `disabled` or `disableCheckbox` take no part in it. With `checkStrictly` parents and children are independent and the `check` event returns `{ checked, halfChecked }`.

## Source

```vue
<script setup lang="ts">
import type { TreeDataNode } from '@antdv-next/mobile'
import { ref } from 'vue'

const treeData: TreeDataNode[] = [
  {
    key: 'fruit',
    title: 'Fruit',
    children: [
      { key: 'apple', title: 'Apple' },
      { key: 'banana', title: 'Banana' },
      { key: 'durian', title: 'Durian (disableCheckbox)', disableCheckbox: true },
    ],
  },
  {
    key: 'vegetable',
    title: 'Vegetables',
    children: [
      {
        key: 'leafy',
        title: 'Leafy',
        children: [
          { key: 'spinach', title: 'Spinach' },
          { key: 'lettuce', title: 'Lettuce' },
        ],
      },
      { key: 'carrot', title: 'Carrot' },
      { key: 'onion', title: 'Onion (disabled)', disabled: true },
    ],
  },
]

const strictly = ref(false)
const checked = ref<(string | number)[]>(['apple', 'spinach'])
</script>

<template>
  <am-flex vertical gap="small">
    <label class="demo-option"><am-switch v-model:checked="strictly" size="small" /> checkStrictly</label>
    <am-tree
      v-model:checked-keys="checked"
      :tree-data="treeData"
      :check-strictly="strictly"
      :selectable="false"
      checkable
      default-expand-all
    />
    <div class="demo-result">
      Checked: {{ checked.join(', ') || '-' }}
    </div>
  </am-flex>
</template>

<style scoped>
.demo-option {
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
}

.demo-result {
  color: var(--am-color-text-tertiary);
  font-size: 13px;
}
</style>
```
