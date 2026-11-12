# Dot on the other side

`mode="end"` shows the dots on the other side of the content; it can also be specified per node with `placement`.

## Source

```vue
<script setup lang="ts">
const items = [
  { content: 'Create a services site 2026-09-01' },
  { content: 'Solve initial network problems 2026-09-01' },
  { content: 'Testing failed 2026-09-01', color: 'red' },
  { content: 'Network problems being solved 2026-09-01' },
]
</script>

<template>
  <am-timeline mode="end" :items="items" />
</template>
```
