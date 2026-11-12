# Basic usage

Basic slider, supports `v-model:value`. When `disabled` is `true`, the slider is disabled.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(30)
const disabled = ref(false)
</script>

<template>
  <am-slider v-model:value="value" :disabled="disabled" />
  <div class="demo-slider-row">
    <span>Value: {{ value }}</span>
    <am-button size="small" @click="disabled = !disabled">
      {{ disabled ? 'Enable' : 'Disable' }}
    </am-button>
  </div>
</template>

<style scoped>
.demo-slider-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size);
}
</style>
```
