# Infinite loading

`reachEnd` fires when the list is scrolled close to its end: load the next page there for endless scrolling. With virtual scrolling only the rows around the visible area are rendered, however much data piles up.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

interface Item {
  id: number
  content: string
}

const PAGE_SIZE = 50

function makePage(offset: number): Item[] {
  return Array.from({ length: PAGE_SIZE }, (_, index) => ({
    id: offset + index,
    content: `Item ${offset + index}`,
  }))
}

const items = ref<Item[]>(makePage(0))
const loading = ref(false)
const itemRender = (item: Item) => item.content

function loadMore() {
  if (loading.value)
    return
  loading.value = true
  setTimeout(() => {
    items.value = [...items.value, ...makePage(items.value.length)]
    loading.value = false
  }, 600)
}
</script>

<template>
  <am-listy :items="items" row-key="id" :height="320" :item-render="itemRender" @reach-end="loadMore" />
  <am-flex justify="center" align="center" gap="small" class="status">
    <am-spin v-if="loading" size="small" />
    <span v-else>{{ items.length }} items loaded</span>
  </am-flex>
</template>

<style scoped>
.status {
  height: 40px;
  color: var(--am-color-text-tertiary);
}
</style>
```
