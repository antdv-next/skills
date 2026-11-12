# Basic

Pass the data through `items`, the unique key through `rowKey` and render every row with `itemRender`. `height` is the max height of the scroll container; the list scrolls once the content is taller.

## Source

```vue
<script setup lang="ts">
interface Item {
  id: number
  content: string
}

const items: Item[] = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  content: `Item ${index}`,
}))

const itemRender = (item: Item) => item.content
</script>

<template>
  <am-listy :items="items" row-key="id" :height="320" :item-render="itemRender" />
</template>
```
