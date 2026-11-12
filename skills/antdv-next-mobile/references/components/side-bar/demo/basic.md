# Basic usage

The classic category layout with navigation on the left and content on the right. Get the active item with `v-model:activeKey` and render the corresponding content.

## Source

```vue
<script setup lang="ts">
import type { SideBarItem } from '@antdv-next/mobile'
import { computed, ref } from 'vue'

const items: SideBarItem[] = [
  { key: 'recommend', title: 'For you' },
  { key: 'phone', title: 'Phones' },
  { key: 'home', title: 'Appliances' },
  { key: 'food', title: 'Food' },
  { key: 'clothes', title: 'Fashion' },
  { key: 'book', title: 'Books' },
  { key: 'sport', title: 'Sports' },
  { key: 'baby', title: 'Baby' },
]

const activeKey = ref<string | number>('recommend')
const current = computed(() => items.find(item => item.key === activeKey.value))
</script>

<template>
  <div class="layout">
    <am-side-bar v-model:active-key="activeKey" :items="items" />
    <div class="content">
      {{ current?.title }}
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 300px;
  background: var(--am-color-bg-container);
}

.content {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: var(--am-color-text-tertiary);
  font-size: 16px;
}
</style>
```
