# Size

`size` controls the spacing of the list items, and the cell padding when `bordered`.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const size = ref<'small' | 'middle' | 'large'>('small')
const options = [
  { label: 'Small', value: 'small' },
  { label: 'Middle', value: 'middle' },
  { label: 'Large', value: 'large' },
]
const items = [
  { key: 'product', label: 'Product', content: 'Cloud Database' },
  { key: 'billing', label: 'Billing', content: 'Prepaid' },
  { key: 'renew', label: 'Auto renewal', content: 'Yes' },
]
</script>

<template>
  <am-flex vertical gap="middle">
    <am-flex gap="small">
      <am-button
        v-for="option in options"
        :key="option.value"
        size="small"
        :type="size === option.value ? 'primary' : 'default'"
        @click="size = option.value as typeof size"
      >
        {{ option.label }}
      </am-button>
    </am-flex>
    <am-descriptions :size="size" bordered :items="items" />
    <am-descriptions :size="size" :items="items" />
  </am-flex>
</template>
```
