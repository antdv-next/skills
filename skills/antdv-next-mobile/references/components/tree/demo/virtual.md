# Big data / virtual scroll

With `height` the tree scrolls inside its own container and virtual scrolling (`virtual`) is on by default: there are more than 10,000 nodes below and only a dozen or so rows near the visible area are rendered, while the check conduction stays instant. `scrollTo({ key, align })` scrolls to a node (it has to be visible, i.e. its parents expanded).

## Source

```vue
<script setup lang="ts">
import type { TreeDataNode } from '@antdv-next/mobile'
import { nextTick, ref } from 'vue'

const treeData: TreeDataNode[] = Array.from({ length: 100 }, (_, i) => ({
  key: `g${i}`,
  title: `Group ${String(i + 1).padStart(3, '0')}`,
  children: Array.from({ length: 100 }, (_, j) => ({
    key: `g${i}-${j}`,
    title: `Member ${String(i + 1).padStart(3, '0')}-${String(j + 1).padStart(3, '0')}`,
  })),
}))

const treeRef = ref()
const expandedKeys = ref<(string | number)[]>(['g0', 'g49'])
const checkedKeys = ref<(string | number)[]>(['g0-1'])

async function scrollToGroup(key: string) {
  if (!expandedKeys.value.includes(key))
    expandedKeys.value = [...expandedKeys.value, key]
  // wait until the tree has rendered with the new expanded keys
  await nextTick()
  treeRef.value?.scrollTo({ key, align: 'top' })
}
</script>

<template>
  <am-flex vertical gap="small">
    <am-flex gap="small" wrap>
      <am-button size="small" @click="scrollToGroup('g49')">
        Go to group 050
      </am-button>
      <am-button size="small" @click="scrollToGroup('g99')">
        Go to group 100
      </am-button>
      <am-button size="small" @click="treeRef?.scrollTo(0)">
        Top
      </am-button>
    </am-flex>
    <am-tree
      ref="treeRef"
      v-model:expanded-keys="expandedKeys"
      v-model:checked-keys="checkedKeys"
      :tree-data="treeData"
      :height="320"
      :selectable="false"
      checkable
    />
    <div class="demo-result">
      Checked: {{ checkedKeys.length }} of 10,100 nodes
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
