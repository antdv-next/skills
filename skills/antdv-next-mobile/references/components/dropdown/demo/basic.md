# Basic usage

`DropdownItem` renders a single-select list from `options`, and `v-model:value` binds the selected value. When `title` is not set, the menu bar shows the text of the selected option.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const sort = ref('default')
const category = ref('all')

const sortOptions = [
  { label: 'Default', value: 'default' },
  { label: 'Best selling', value: 'sales' },
  { label: 'Price: low to high', value: 'price-asc' },
  { label: 'Price: high to low', value: 'price-desc' },
]
const categoryOptions = [
  { label: 'All items', value: 'all' },
  { label: 'New arrivals', value: 'new' },
  { label: 'On sale', value: 'sale' },
  { label: 'Pre-sale (unavailable)', value: 'presale', disabled: true },
]
</script>

<template>
  <am-dropdown>
    <am-dropdown-item key="category" v-model:value="category" :options="categoryOptions" />
    <am-dropdown-item key="sort" v-model:value="sort" :options="sortOptions" />
  </am-dropdown>
  <div class="page">
    Current: {{ category }} / {{ sort }}
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
