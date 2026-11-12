# Option description

Options can carry a `description`.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = [
  { label: 'Monthly', description: '¥ 25 / mo', value: 'month' },
  { label: 'Quarterly', description: '¥ 68 / qtr', value: 'quarter' },
  { label: 'Yearly', description: '¥ 228 / yr', value: 'year' },
]
const value = ref(['quarter'])
</script>

<template>
  <am-selector v-model:value="value" :options="options" :columns="3" />
</template>
```
