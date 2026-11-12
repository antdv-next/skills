# Basic usage

The simplest usage: pass an array of strings or numbers to `options` and get the selected option with `v-model:value`.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string | number>('Week')
</script>

<template>
  <am-flex vertical gap="middle" align="flex-start">
    <am-segmented v-model:value="value" :options="['Day', 'Week', 'Month', 'Quarter', 'Year']" />
    <span style="color: var(--am-color-text-tertiary); font-size: 13px">Selected: {{ value }}</span>
  </am-flex>
</template>
```
