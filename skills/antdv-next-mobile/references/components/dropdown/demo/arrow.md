# Custom arrow and style

Customize the arrow with the `arrowIcon` prop or slot and the title with the `title` slot; adjust the look with the `--am-dropdown-*` component tokens.

## Source

```vue
<script setup lang="ts">
import { DownOutlined, FilterOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const value = ref('hot')
const options = [
  { label: 'Hottest', value: 'hot' },
  { label: 'Newest', value: 'new' },
]
</script>

<template>
  <am-dropdown class="custom-dropdown">
    <template #arrowIcon>
      <DownOutlined />
    </template>
    <am-dropdown-item key="sort" v-model:value="value" :options="options" root-class="custom-dropdown-layer" />
    <am-dropdown-item key="filter" root-class="custom-dropdown-layer">
      <template #title>
        <b>Filter</b>
      </template>
      <template #arrowIcon>
        <FilterOutlined />
      </template>
      <div class="panel">
        This item has its own title and icon
      </div>
    </am-dropdown-item>
  </am-dropdown>
  <div class="page">
    Custom arrow and component tokens
  </div>
</template>

<style scoped>
.panel {
  padding: 24px 16px;
}

.page {
  padding: 48px 16px;
  color: var(--am-color-text-secondary);
  text-align: center;
}
</style>

<style>
.custom-dropdown {
  --am-dropdown-height: 48px;
  --am-dropdown-active-color: #eb2f96;
  --am-dropdown-arrow-size: 12px;
}

.custom-dropdown-layer {
  --am-dropdown-option-active-color: #eb2f96;
  --am-dropdown-panel-border-radius: 20px;
}
</style>
```
