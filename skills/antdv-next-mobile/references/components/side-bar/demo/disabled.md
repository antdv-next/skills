# Disabled item

Disable an item with `disabled`; the `change` event is triggered on switching.

## Source

```vue
<script setup lang="ts">
import type { SideBarItem } from '@antdv-next/mobile'
import { ref } from 'vue'

const items: SideBarItem[] = [
  { key: 1, title: 'Option 1' },
  { key: 2, title: 'Option 2' },
  { key: 3, title: 'Option 3', disabled: true },
  { key: 4, title: 'Option 4' },
]

const log = ref('Tap an item on the left')

function handleChange(key: string | number) {
  log.value = `change: ${key}`
}
</script>

<template>
  <div class="layout">
    <am-side-bar :items="items" :default-active-key="2" @change="handleChange" />
    <div class="content">
      {{ log }}
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 220px;
  background: var(--am-color-bg-container);
}

.content {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: var(--am-color-text-tertiary);
}
</style>
```
