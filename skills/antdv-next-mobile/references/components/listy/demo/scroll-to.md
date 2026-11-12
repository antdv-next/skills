# Scroll control

Use `scrollTo` on the ref to jump to a pixel position, an item (`key`, the value of `rowKey`) or a group (`groupKey`); `align` and `offset` control the alignment. With `sticky`, a top-aligned item stops below the pinned header. The `scroll` event is the native scroll event.

## Source

```vue
<script setup lang="ts">
import type { ListyGroup, ListyRef, ListyScrollAlign } from '@antdv-next/mobile'
import { ref } from 'vue'

interface Item {
  id: number
  group: string
}

const items: Item[] = Array.from({ length: 60 }, (_, index) => ({
  id: index,
  group: `Group ${Math.floor(index / 10)}`,
}))

const group: ListyGroup = {
  key: (item: Item) => item.group,
  title: groupKey => groupKey,
}

const itemRender = (item: Item) => `Item ${item.id}`

const listRef = ref<ListyRef>()
const align = ref<ListyScrollAlign>('top')
const scrollTop = ref(0)

function onScroll(event: Event) {
  scrollTop.value = Math.round((event.currentTarget as HTMLElement).scrollTop)
}
</script>

<template>
  <am-flex vertical gap="small" style="padding: 12px 16px">
    <am-segmented v-model:value="align" block :options="['top', 'bottom', 'auto']" />
    <am-flex gap="small">
      <am-button block size="small" @click="listRef?.scrollTo({ key: 40, align })">
        Item 40
      </am-button>
      <am-button block size="small" @click="listRef?.scrollTo({ groupKey: 'Group 3', align })">
        Group 3
      </am-button>
      <am-button block size="small" @click="listRef?.scrollTo(0)">
        Top
      </am-button>
    </am-flex>
    <span class="hint">scrollTop: {{ scrollTop }}px</span>
  </am-flex>
  <am-listy
    ref="listRef"
    :items="items"
    row-key="id"
    :height="320"
    sticky
    :group="group"
    :item-render="itemRender"
    @scroll="onScroll"
  />
</template>

<style scoped>
.hint {
  color: var(--am-color-text-tertiary);
  font-size: var(--am-font-size-sm);
}
</style>
```
