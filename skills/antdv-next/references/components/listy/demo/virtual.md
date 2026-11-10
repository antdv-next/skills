# Virtual scrolling

## Description (en-US)

A long list of 10,000 rows. Set `virtual` and `height` to enable virtual scrolling, so only the rows in view are rendered.

## Source

```vue
<script setup lang="ts">
interface Item {
  id: number
  content: string
}

const items = Array.from<any, Item>({ length: 10000 }, (_, index) => ({
  id: index,
  content: `Item ${index}`,
}))
</script>

<template>
  <a-listy
    virtual
    :items="items"
    :height="400"
    :row-key="(item: Item) => item.id"
    :item-render="(item: Item) => item.content"
  />
</template>
```
