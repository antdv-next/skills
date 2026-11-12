# Sizes and disabled

The trigger comes in three sizes: `small`, `middle` (default) and `large`. A `disabled` picker cannot be opened.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const disabled = ref(true)
</script>

<template>
  <am-flex vertical gap="middle">
    <am-flex gap="middle" align="center">
      <am-color-picker default-value="#1677ff" size="small" />
      <am-color-picker default-value="#1677ff" />
      <am-color-picker default-value="#1677ff" size="large" />
    </am-flex>
    <am-flex gap="middle" align="center">
      <am-color-picker default-value="#1677ff" size="small" show-text />
      <am-color-picker default-value="#1677ff" show-text />
    </am-flex>
    <am-color-picker default-value="#1677ff" size="large" show-text />
    <am-flex gap="middle" align="center">
      <am-color-picker default-value="#1677ff" show-text :disabled="disabled" />
      <am-switch v-model:checked="disabled" />
      <span class="demo-label">Disabled</span>
    </am-flex>
  </am-flex>
</template>

<style scoped>
.demo-label {
  color: var(--am-color-text-secondary);
  font-size: 14px;
}
</style>
```
