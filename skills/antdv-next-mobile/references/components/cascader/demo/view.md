# Inline view CascaderView

`CascaderView` (i.e. `Cascader.View`) is the cascading view without the trigger and the popup; it can be embedded in a page or a custom popup.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { regions } from './data'

const value = ref(['jiangsu', 'nanjing'])
</script>

<template>
  <am-cascader-view v-model:value="value" :options="regions" change-on-select class="demo-cascader-view" />
  <div class="demo-result">
    {{ JSON.stringify(value) }}
  </div>
</template>

<style scoped>
.demo-cascader-view {
  --am-cascader-view-height: 300px;

  background: var(--am-color-bg-container);
}

.demo-result {
  padding: 12px 16px;
  color: var(--am-color-text-tertiary);
  font-size: 13px;
}
</style>
```
