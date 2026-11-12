# Basic usage

On mobile it is a stepper with − / + buttons by default; bind the value with `v-model:value`. Long-press a button to step continuously, or tap the number in the middle to type directly.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref<number | null>(1)
</script>

<template>
  <am-flex align="center" gap="middle">
    <am-input-number v-model:value="value" />
    <span>value: {{ value ?? 'null' }}</span>
  </am-flex>
</template>
```
