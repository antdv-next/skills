# Bordered

A list with border and background color.

## Source

```vue
<script setup lang="ts">
const items = [
  { key: 'product', label: 'Product', content: 'Cloud Database' },
  { key: 'billing', label: 'Billing', content: 'Prepaid' },
  { key: 'renew', label: 'Auto renewal', content: 'Yes' },
  { key: 'config', label: 'Config', content: 'Data disk type: MongoDB; Database version: 3.4; Storage space: 10 GB; Replication factor: 3' },
]
</script>

<template>
  <am-descriptions title="Bordered" bordered :items="items" />
</template>
```
