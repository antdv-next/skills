# Scroll to an item

Call `scrollTo` through a ref: pass a number to scroll to a position, pass `{ index }` or `{ key }` to scroll to a specific item, and `align` controls whether the target item rests at the top, middle or bottom of the visible area.

## Source

```vue
<script setup lang="ts">
import type { VirtualListExpose } from '@antdv-next/mobile'
import { ref } from 'vue'

const data = Array.from({ length: 10000 }, (_, index) => ({ id: `user-${index}`, name: `User ${index + 1}` }))
const listRef = ref<VirtualListExpose>()
const active = ref('')

function toIndex(index: number) {
  active.value = data[index].id
  listRef.value?.scrollTo({ index, align: 'center' })
}

function toKey(key: string) {
  active.value = key
  listRef.value?.scrollTo({ key, align: 'start' })
}
</script>

<template>
  <div style="padding: 12px 16px">
    <am-flex gap="small" wrap>
      <am-button size="small" @click="listRef?.scrollTo(0)">
        Top
      </am-button>
      <am-button size="small" @click="toIndex(4999)">
        index: 4999 (center)
      </am-button>
      <am-button size="small" @click="toKey('user-8000')">
        key: user-8000 (start)
      </am-button>
      <am-button size="small" @click="toIndex(data.length - 1)">
        Bottom
      </am-button>
    </am-flex>
  </div>
  <am-virtual-list ref="listRef" :data="data" :height="320" :item-height="48" item-key="id" fixed class="demo-list">
    <template #default="{ item, index }">
      <div class="demo-row" :class="{ 'demo-row-active': item.id === active }">
        <span>{{ item.name }}</span>
        <span class="demo-row-extra">index {{ index }} · {{ item.id }}</span>
      </div>
    </template>
  </am-virtual-list>
</template>

<style scoped>
.demo-list {
  background: var(--am-color-bg-container);
}

.demo-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 48px;
  padding: 0 16px;
  color: var(--am-color-text);
  font-size: 15px;
  border-bottom: 1px solid var(--am-color-split);
}

.demo-row-active {
  color: var(--am-color-primary);
  background: var(--am-color-primary-bg);
}

.demo-row-extra {
  color: var(--am-color-text-tertiary);
  font-size: 12px;
}
</style>
```
