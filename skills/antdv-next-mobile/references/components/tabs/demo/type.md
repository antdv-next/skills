# Tab types

Besides the default `line`, there are also the `card` style and the `capsule` style added for mobile.

## Source

```vue
<script setup lang="ts">
import type { TabsItem } from '@antdv-next/mobile'

const items: TabsItem[] = [
  { key: '1', label: 'All', content: 'All orders' },
  { key: '2', label: 'Unpaid', content: 'Unpaid orders' },
  { key: '3', label: 'Shipped', content: 'Shipped orders' },
  { key: '4', label: 'Done', content: 'Completed orders' },
]

const contentStyles = { content: { padding: '16px' } }
</script>

<template>
  <div class="stack">
    <am-tabs type="card" :items="items" :styles="contentStyles" />
    <am-tabs type="capsule" :items="items" :stretch="false" :styles="contentStyles" />
  </div>
</template>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stack > * {
  background: var(--am-color-bg-container);
}
</style>
```
