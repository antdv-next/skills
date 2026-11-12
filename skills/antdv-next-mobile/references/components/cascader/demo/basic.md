# Basic usage

Bind the value path array with `v-model:value`. Selecting an option moves to the next level automatically, and selecting a leaf node commits the value and closes the popup; tap a tab to go back to a previous level and select again.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { regions } from './data'

const value = ref<string[]>([])
</script>

<template>
  <am-flex vertical gap="small">
    <am-cascader v-model:value="value" :options="regions" title="Region" placeholder="Please select a region" allow-clear />
    <div class="demo-result">
      Value: {{ JSON.stringify(value) }}
    </div>
  </am-flex>
</template>

<style scoped>
.demo-result {
  color: var(--am-color-text-tertiary);
  font-size: 13px;
}
</style>
```
