# Badge

A badge is shown when `badge` is a number or text, and a red dot when it is `true`.

## Source

```vue
<script setup lang="ts">
import type { SideBarItem } from '@antdv-next/mobile'

const items: SideBarItem[] = [
  { key: 'all', title: 'All' },
  { key: 'pay', title: 'Unpaid', badge: 5 },
  { key: 'ship', title: 'To ship', badge: '99+' },
  { key: 'receive', title: 'Shipped', badge: true },
  { key: 'review', title: 'To review' },
]
</script>

<template>
  <div class="layout">
    <am-side-bar :items="items" />
  </div>
</template>

<style scoped>
.layout {
  height: 260px;
  background: var(--am-color-bg-container);
}
</style>
```
