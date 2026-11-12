# Sticky

With `sticky` enabled, the tab bar sticks to the top inside the scroll container, and `offsetTop` sets the distance from the top (e.g. the height of a fixed nav bar).

## Source

```vue
<script setup lang="ts">
import type { TabsItem } from '@antdv-next/mobile'

const items: TabsItem[] = [
  { key: '1', label: 'Product' },
  { key: '2', label: 'Reviews' },
  { key: '3', label: 'Details' },
]
</script>

<template>
  <div class="scroller">
    <div class="banner">
      Scroll down and the tab bar sticks to the top
    </div>
    <am-tabs :items="items" sticky>
      <template #default="{ item }">
        <p v-for="i in 12" :key="i" class="row">
          {{ item.label }} {{ i }}
        </p>
      </template>
    </am-tabs>
  </div>
</template>

<style scoped>
.scroller {
  height: 280px;
  overflow-y: auto;
}

.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  color: var(--am-color-text-light-solid);
  background: var(--am-color-primary);
}

.row {
  margin: 0;
  padding: 12px 16px;
  color: var(--am-color-text-secondary);
}
</style>
```
