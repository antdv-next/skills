# Single selection

Single selection by default. `value` is always an array, and tapping the selected option again deselects it.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]
const value = ref(['1'])
</script>

<template>
  <am-selector v-model:value="value" :options="options" />
</template>
```
