# Multiple selection

Set `multiple` to enable multiple selection. The second argument of the `change` event gives the selected original options.

## Source

```vue
<script setup lang="ts">
import type { SelectorOption, SelectorValue } from '@antdv-next/mobile'
import { ref } from 'vue'

const options = [
  { label: 'Basketball', value: 'basketball' },
  { label: 'Football', value: 'football' },
  { label: 'Badminton', value: 'badminton' },
  { label: 'Swimming', value: 'swimming' },
  { label: 'Running', value: 'running' },
]
const value = ref<SelectorValue[]>(['football', 'running'])
const text = ref('Football, Running')

function handleChange(_: SelectorValue[], extra: { items: SelectorOption[] }) {
  text.value = extra.items.map(item => item.label).join(', ') || 'None'
}
</script>

<template>
  <am-selector v-model:value="value" :options="options" multiple @change="handleChange" />
  <p class="demo-selector-text">
    Selected: {{ text }}
  </p>
</template>

<style scoped>
.demo-selector-text {
  margin: 12px 0 0;
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size);
}
</style>
```
