# Dynamic

Add and remove items dynamically; the other items move to their new position with a transition. `layoutChange` returns the column of every item: write it back to `column` and the other items keep their column when one is removed.

## Source

```vue
<script setup lang="ts">
import type { MasonryLayoutInfo } from '@antdv-next/mobile'
import { CloseOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

interface ItemType {
  key: number
  column?: number
  data: number
}

const items = ref<ItemType[]>([120, 60, 90, 70, 110, 80].map((height, index) => ({ key: index, data: height })))

function removeItem(removeKey: string | number) {
  items.value = items.value.filter(({ key }) => key !== removeKey)
}

function addItem() {
  const last = items.value[items.value.length - 1]
  items.value = [...items.value, { key: last ? last.key + 1 : 0, data: Math.floor(Math.random() * 80) + 50 }]
}

function handleLayoutChange(sortInfo: MasonryLayoutInfo[]) {
  items.value = items.value.map((item) => {
    const match = sortInfo.find(info => info.key === item.key)
    return match ? { ...item, column: match.column } : item
  })
}
</script>

<template>
  <am-space vertical block>
    <am-masonry :items="items" :gutter="12" @layout-change="handleLayoutChange">
      <template #itemRender="{ data, key }">
        <div class="block" :style="{ height: `${data}px` }">
          {{ Number(key) + 1 }}
          <am-button class="remove" type="text" size="small" aria-label="Remove" @click="removeItem(key)">
            <template #icon>
              <CloseOutlined />
            </template>
          </am-button>
        </div>
      </template>
    </am-masonry>
    <am-button block @click="addItem">
      Add Item
    </am-button>
  </am-space>
</template>

<style scoped>
.block {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--am-color-text);
  background: var(--am-color-fill-tertiary);
  border: 1px solid var(--am-color-border-secondary);
  border-radius: var(--am-border-radius);
}

.remove {
  position: absolute;
  inset-block-start: 4px;
  inset-inline-end: 4px;
}
</style>
```
