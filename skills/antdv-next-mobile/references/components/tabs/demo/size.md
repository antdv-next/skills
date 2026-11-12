# Size and centered

`size` provides three sizes; `centered` centers the tabs instead of sharing the width equally; `tabPlacement="bottom"` puts the tab bar below the content.

## Source

```vue
<script setup lang="ts">
import type { TabsItem } from '@antdv-next/mobile'
import { ref } from 'vue'

const items: TabsItem[] = [
  { key: '1', label: 'Tab 1', content: 'Content 1' },
  { key: '2', label: 'Tab 2', content: 'Content 2' },
  { key: '3', label: 'Tab 3', content: 'Content 3' },
]

const sizeOptions = [
  { label: 'Small', value: 'small' },
  { label: 'Middle', value: 'middle' },
  { label: 'Large', value: 'large' },
]
const size = ref<'small' | 'middle' | 'large'>('middle')
const centered = ref(true)
const bottom = ref(false)
</script>

<template>
  <div class="toolbar">
    <am-segmented v-model:value="size" :options="sizeOptions" />
    <label><am-switch v-model:checked="centered" size="small" /> Centered</label>
    <label><am-switch v-model:checked="bottom" size="small" /> Bottom</label>
  </div>
  <am-tabs
    :items="items"
    :size="size"
    :centered="centered"
    :tab-placement="bottom ? 'bottom' : 'top'"
    :styles="{ content: { padding: '16px' } }"
  />
</template>

<style scoped>
.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  padding: 12px 16px;
  font-size: 13px;
}

.toolbar label {
  display: inline-flex;
  gap: 4px;
  align-items: center;
}
</style>
```
