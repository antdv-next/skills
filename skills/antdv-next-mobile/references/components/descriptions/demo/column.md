# Multiple columns and span

`column` sets the number of columns in a row, `span` sets the number of columns an item occupies, and `'filled'` takes up the remaining columns of the current row.

## Source

```vue
<script setup lang="ts">
const items = [
  { key: 'product', label: 'Product', content: 'Cloud Database' },
  { key: 'billing', label: 'Billing', content: 'Prepaid' },
  { key: 'time', label: 'Expires', content: '2027-09-01 00:00:00', span: 2 },
  { key: 'region', label: 'Region', content: 'East China 1' },
  { key: 'status', label: 'Status', content: 'Running', span: 'filled' as const },
  { key: 'remark', label: 'Remark', content: 'The last item fills the whole row' },
]
</script>

<template>
  <am-descriptions title="Instance Info" :column="2" :items="items" />
</template>
```
