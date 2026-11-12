# Step status

`status` specifies the status of the current step; a `status` can also be set for an individual step in `items`.

## Source

```vue
<script setup lang="ts">
import type { StepsItem } from '@antdv-next/mobile'

const items: StepsItem[] = [
  { title: 'Apply' },
  { title: 'Review', content: 'ID photo is blurry' },
  { title: 'Activated' },
]
</script>

<template>
  <am-flex vertical gap="large">
    <am-steps :current="1" status="error" :items="items" />
    <am-steps :current="2" status="finish" :items="items.map(item => ({ title: item.title }))" />
  </am-flex>
</template>
```
