# Basic usage

Basic usage. Bind the input value with `v-model:value`. The clear button of `allowClear` is only shown when the input is focused and has content, and `clearTrigger="always"` keeps it always visible.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const phone = ref('13800138000')
</script>

<template>
  <am-flex vertical gap="small">
    <am-input v-model:value="value" placeholder="Please enter" />
    <am-input v-model:value="phone" type="tel" inputmode="tel" placeholder="Please enter phone number" allow-clear />
    <am-input default-value="Clear button always shown" allow-clear clear-trigger="always" />
    <span style="font-size: 12px; color: var(--am-color-text-tertiary)">value: {{ value }}</span>
  </am-flex>
</template>
```
