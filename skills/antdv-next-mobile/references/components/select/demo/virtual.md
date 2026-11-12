# Large data / virtual scrolling

Virtual scrolling (`virtual`) is enabled for the option list by default: even with 5,000 options only a dozen or so items near the visible area are rendered, and search, multiple selection and groups all work as usual; the selected option is scrolled to the middle of the list when the popup opens. `listHeight` sets the maximum height of the list, and `listItemHeight` sets the option height.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = Array.from({ length: 5000 }, (_, index) => ({
  label: `Staff ${String(index + 1).padStart(4, '0')}`,
  value: index + 1,
  description: index % 3 === 0 ? `ID E${10000 + index}` : undefined,
}))
const plain = options.map(({ label, value }) => ({ label, value }))

const single = ref<number | null>(3200)
const multiple = ref<number[]>([])
</script>

<template>
  <am-flex vertical gap="small">
    <am-select v-model:value="single" :options="options" show-search title="Select staff" placeholder="5,000 options (variable height)" />
    <am-select
      v-model:value="multiple"
      :options="plain"
      mode="multiple"
      :max-tag-count="3"
      :list-height="280"
      :list-item-height="44"
      title="Select staff members"
      placeholder="Multiple · listHeight 280 · listItemHeight 44"
    />
  </am-flex>
</template>
```
