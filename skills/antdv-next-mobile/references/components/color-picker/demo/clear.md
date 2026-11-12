# Clear and disabled alpha

`allowClear` shows a clear button in the panel; after confirming, the value becomes "transparent" and `clear` fires. `disabledAlpha` hides the alpha slider and input, so colors are always opaque.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const clearable = ref<string | null>('#1677ff')
const opaque = ref('#eb2f96')
</script>

<template>
  <am-flex vertical gap="middle">
    <am-flex gap="middle" align="center">
      <am-color-picker v-model:value="clearable" value-format="hex" allow-clear show-text />
      <span class="demo-label">allowClear</span>
    </am-flex>
    <am-flex gap="middle" align="center">
      <am-color-picker v-model:value="opaque" value-format="hex" disabled-alpha show-text />
      <span class="demo-label">disabledAlpha</span>
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
