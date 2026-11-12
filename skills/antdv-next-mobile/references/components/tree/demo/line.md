# Lines and custom icons

`showLine` draws the guide lines, and `showLine: { showLeafIcon: true }` puts a file icon in front of leaves. `showIcon` together with the `icon` slot (or the prop, or `icon` in the node data) renders an icon in front of the title; the `switcherIcon` slot customises the arrow. The slot props carry the node state such as `expanded` and `isLeaf`.

## Source

```vue
<script setup lang="ts">
import type { TreeDataNode } from '@antdv-next/mobile'
import { DownOutlined, FileTextOutlined, FolderOpenOutlined, FolderOutlined, StarFilled } from '@antdv-next/icons'
import { h, ref } from 'vue'

const treeData: TreeDataNode[] = [
  {
    key: 'src',
    title: 'src',
    children: [
      {
        key: 'components',
        title: 'components',
        children: [
          { key: 'button', title: 'Button.vue' },
          { key: 'tree', title: 'Tree.vue', icon: h(StarFilled, { style: { color: 'var(--am-color-warning)' } }) },
        ],
      },
      { key: 'main', title: 'main.ts' },
    ],
  },
  {
    key: 'public',
    title: 'public',
    children: [{ key: 'favicon', title: 'favicon.svg' }],
  },
  { key: 'readme', title: 'README.md' },
]

const showLine = ref(true)
const showLeafIcon = ref(false)
const showIcon = ref(true)
const customSwitcher = ref(false)
</script>

<template>
  <am-flex vertical gap="small">
    <am-flex gap="middle" wrap>
      <label class="demo-option"><am-switch v-model:checked="showLine" size="small" /> showLine</label>
      <label class="demo-option"><am-switch v-model:checked="showLeafIcon" size="small" :disabled="!showLine" /> showLeafIcon</label>
      <label class="demo-option"><am-switch v-model:checked="showIcon" size="small" /> showIcon</label>
      <label class="demo-option"><am-switch v-model:checked="customSwitcher" size="small" /> switcherIcon</label>
    </am-flex>
    <am-tree
      :tree-data="treeData"
      :show-line="showLine ? { showLeafIcon } : false"
      :show-icon="showIcon"
      :default-expanded-keys="['components']"
    >
      <template #icon="{ isLeaf, expanded }">
        <FileTextOutlined v-if="isLeaf" />
        <FolderOpenOutlined v-else-if="expanded" />
        <FolderOutlined v-else />
      </template>
      <template v-if="customSwitcher" #switcherIcon>
        <DownOutlined />
      </template>
    </am-tree>
  </am-flex>
</template>

<style scoped>
.demo-option {
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
}
</style>
```
