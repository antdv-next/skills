# Manual control and no auto close

Control it manually by calling `show(side)` and `close()` through a ref. With `closeOnAction` set to `false`, clicking a button does not close automatically; with `closeOnTouchOutside` set to `false`, touching outside does not close; `disabled` disables swiping.

## Source

```vue
<script setup lang="ts">
import type { SwipeActionItem } from '@antdv-next/mobile'
import { ref } from 'vue'

const swipeRef = ref()
const rightActions: SwipeActionItem[] = [
  { key: 'edit', text: 'Edit', color: 'primary' },
  { key: 'delete', text: 'Delete', color: 'danger' },
]
const leftActions: SwipeActionItem[] = [{ key: 'pin', text: 'Pin', color: 'warning' }]
const state = ref('Closed')
</script>

<template>
  <am-swipe-action
    ref="swipeRef"
    :left-actions="leftActions"
    :right-actions="rightActions"
    :close-on-action="false"
    :close-on-touch-outside="false"
    @actions-reveal="state = `Opened: ${$event}`"
    @close="state = 'Closed'"
  >
    <div class="cell">
      <span>Manual control</span>
      <span class="cell-extra">{{ state }}</span>
    </div>
  </am-swipe-action>
  <am-flex gap="small" style="padding: 12px 16px">
    <am-button size="small" @click="swipeRef?.show('left')">
      Show left
    </am-button>
    <am-button size="small" @click="swipeRef?.show('right')">
      Show right
    </am-button>
    <am-button size="small" @click="swipeRef?.close()">
      Close
    </am-button>
  </am-flex>
  <am-swipe-action :right-actions="rightActions" disabled>
    <div class="cell">
      <span>Swipe disabled</span>
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
