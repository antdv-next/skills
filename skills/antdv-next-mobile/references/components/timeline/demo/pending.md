# Last node and order

When a task is still in progress and being recorded, use `pending` to show a ghost node; `reverse` controls the order of the nodes.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const reverse = ref(false)
const items = [
  { content: 'Create a services site 2026-09-01' },
  { content: 'Solve initial network problems 2026-09-01' },
  { content: 'Testing failed 2026-09-01' },
]
</script>

<template>
  <am-flex vertical gap="middle">
    <am-timeline :items="items" pending="Recording..." :reverse="reverse" />
    <am-button block @click="reverse = !reverse">
      Toggle reverse
    </am-button>
  </am-flex>
</template>
```
