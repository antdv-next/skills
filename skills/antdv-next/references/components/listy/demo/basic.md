# Basic

## Description (en-US)

Basic example.

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
</script>

<template>
  <a-listy :items="items" :row-key="(item: Item) => item.id" :height="400" :item-render="(item: Item) => item.content" />
</template>
```
