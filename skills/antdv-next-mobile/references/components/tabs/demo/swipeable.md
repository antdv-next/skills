# Swipe to switch

With `swipeable` enabled, tabs can be switched by swiping the content area left and right. The content follows the finger, the edges are damped, and disabled tabs are skipped automatically.

## Source

```vue
<script setup lang="ts">
import type { TabsItem } from '@antdv-next/mobile'
import { ref } from 'vue'

const items: TabsItem[] = [
  { key: 'a', label: 'Following' },
  { key: 'b', label: 'For you' },
  { key: 'c', label: 'Disabled', disabled: true },
  { key: 'd', label: 'Nearby' },
]

const activeKey = ref<string | number>('b')
</script>

<template>
  <am-tabs v-model:active-key="activeKey" :items="items" swipeable>
    <template #default="{ item }">
      <div class="pane">
        ← Swipe to switch →<br>{{ item.label }}
      </div>
    </template>
  </am-tabs>
</template>

<style scoped>
.pane {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  color: var(--am-color-text-tertiary);
  text-align: center;
}
</style>
```
