# Basic usage

An input-like trigger is rendered by default; tapping it pops up the wheel from the bottom. `v-model:value` is committed only when "OK" is tapped; tapping "Cancel" or the mask discards the selection.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const columns = [
  ['Primary', 'Middle school', 'High school', 'Associate', 'Bachelor', 'Master', 'Doctorate'].map(label => ({ label, value: label })),
]
const value = ref<string[]>([])
</script>

<template>
  <am-picker v-model:value="value" :columns="columns" title="Education" placeholder="Please select" allow-clear />
</template>
```
