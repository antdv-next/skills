# Highlight and disabled

`highlight` keeps the title highlighted to indicate that a filter has been applied to that item; `disabled` disables an item.

## Source

```vue
<script setup lang="ts">
import { computed, ref } from 'vue'

const price = ref('all')
const options = [
  { label: 'Any price', value: 'all' },
  { label: '¥0 - 100', value: '0-100' },
  { label: '¥100 - 500', value: '100-500' },
  { label: 'Over ¥500', value: '500+' },
]
const highlight = computed(() => price.value !== 'all')
</script>

<template>
  <am-dropdown>
    <am-dropdown-item key="price" v-model:value="price" title="Price" :options="options" :highlight="highlight" />
    <am-dropdown-item key="brand" title="Brand" highlight :options="[{ label: 'Selected: Brand A', value: 'a' }]" default-value="a" />
    <am-dropdown-item key="region" title="Region" disabled />
  </am-dropdown>
  <div class="page">
    Pick a price range to highlight "Price"
  </div>
</template>

<style scoped>
.page {
  padding: 48px 16px;
  color: var(--am-color-text-secondary);
  text-align: center;
}
</style>
```
