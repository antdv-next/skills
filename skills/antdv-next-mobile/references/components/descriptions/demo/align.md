# Content aligned to the end

`contentAlign="end"` aligns the content to the right; together with `colon=false` it becomes the order detail style common on mobile.

## Source

```vue
<script setup lang="ts">
const items = [
  { key: 'no', label: 'Order No.', content: '2026090112345678' },
  { key: 'time', label: 'Order time', content: '2026-09-01 12:30:45' },
  { key: 'pay', label: 'Payment', content: 'Online payment' },
  { key: 'amount', label: 'Amount paid', content: '¥ 268.00', styles: { content: { color: 'var(--am-color-error)', fontWeight: 600 } } },
]
</script>

<template>
  <am-descriptions title="Order Info" :items="items" :colon="false" content-align="end" />
</template>
```
