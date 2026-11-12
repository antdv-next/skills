# Disabled

The switch cannot be operated in the `disabled` state.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const disabled = ref(true)
</script>

<template>
  <am-flex vertical gap="middle" align="flex-start">
    <am-flex gap="middle">
      <am-switch default-checked :disabled="disabled" />
      <am-switch :disabled="disabled" />
    </am-flex>
    <am-button type="primary" size="small" @click="disabled = !disabled">
      Toggle disabled
    </am-button>
  </am-flex>
</template>
```
