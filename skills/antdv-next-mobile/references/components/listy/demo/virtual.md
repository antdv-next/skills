# Virtual scrolling

A long list of 10,000 rows. Virtual scrolling is on by default (`virtual`): only the rows around the visible area are rendered. `:virtual="false"` renders every row with the same DOM structure.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

interface Item {
  id: number
  content: string
}

const items: Item[] = Array.from({ length: 10000 }, (_, index) => ({
  id: index,
  content: `Item ${index}`,
}))

const itemRender = (item: Item) => item.content
const virtual = ref(true)
</script>

<template>
  <am-flex align="center" justify="space-between" style="padding: 12px 16px">
    <span>Virtual scrolling, 10,000 rows</span>
    <am-switch v-model:checked="virtual" />
  </am-flex>
  <am-listy :virtual="virtual" :items="items" row-key="id" :height="320" :item-render="itemRender" />
</template>
```
