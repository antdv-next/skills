# Inside a popup

When used inside [Popup](../../popup/docs.md), just limit the list height with `height` (or CSS `max-height`). After the popup opens for the first time, call `scrollTo({ key, align: 'center' })` to scroll the currently selected item to the middle.

## Source

```vue
<script setup lang="ts">
import type { VirtualListExpose } from '@antdv-next/mobile'
import { nextTick, ref } from 'vue'

const cities = Array.from({ length: 5000 }, (_, index) => ({ code: `C${String(index + 1).padStart(4, '0')}`, name: `City ${index + 1}` }))

const open = ref(false)
const selected = ref('C2600')
const listRef = ref<VirtualListExpose>()

function show() {
  open.value = true
  // the list is rendered (and visible) after the popup opened
  nextTick(() => listRef.value?.scrollTo({ key: selected.value, align: 'center' }))
}

function select(code: string) {
  selected.value = code
  open.value = false
}
</script>

<template>
  <am-list>
    <am-list-item title="Select city" :extra="selected" clickable @click="show" />
  </am-list>
  <am-popup v-model:open="open" placement="bottom" round closable>
    <div class="demo-title">
      Select city (5,000)
    </div>
    <am-virtual-list ref="listRef" :data="cities" height="50vh" :item-height="48" item-key="code" fixed>
      <template #default="{ item }">
        <div class="demo-row" :class="{ 'demo-row-active': item.code === selected }" @click="select(item.code)">
          <span>{{ item.name }}</span>
          <span class="demo-row-extra">{{ item.code }}</span>
        </div>
      </template>
    </am-virtual-list>
  </am-popup>
</template>

<style scoped>
.demo-title {
  padding: 14px 16px;
  color: var(--am-color-text);
  font-weight: 600;
  font-size: 16px;
  text-align: center;
}

.demo-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 48px;
  padding: 0 16px;
  color: var(--am-color-text);
  font-size: 15px;
}

.demo-row:active {
  background: var(--am-color-fill-tertiary);
}

.demo-row-active {
  color: var(--am-color-primary);
  font-weight: 600;
}

.demo-row-extra {
  color: var(--am-color-text-tertiary);
  font-size: 12px;
}
</style>
```
