# Actions on both sides

Set both `leftActions` and `rightActions`. `color` supports presets as well as any CSS color.

## Source

```vue
<script setup lang="ts">
import type { SwipeActionItem } from '@antdv-next/mobile'

const leftActions: SwipeActionItem[] = [
  { key: 'pin', text: 'Pin', color: 'primary' },
  { key: 'star', text: 'Star', color: 'success' },
]
const rightActions: SwipeActionItem[] = [
  { key: 'archive', text: 'Archive', color: '#722ed1' },
  { key: 'delete', text: 'Delete', color: 'danger' },
]
</script>

<template>
  <am-swipe-action :left-actions="leftActions" :right-actions="rightActions">
    <div class="cell">
      <span>Swipe left or right</span>
      <span class="cell-extra">← →</span>
    </div>
  </am-swipe-action>
</template>

<style scoped>
.cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  min-height: 52px;
  padding: 12px 16px;
  color: var(--am-color-text);
  font-size: 16px;
  background: var(--am-color-bg-container);
}

.cell-extra {
  color: var(--am-color-text-description);
  font-size: 14px;
}
</style>
```
