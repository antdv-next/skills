# Clickable card

Mobile only: with `clickable` turned on, the whole card gives scale and opacity feedback when pressed, and the click event is bound directly on the card.

## Source

```vue
<script setup lang="ts">
import { RightOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <am-card clickable @click="count++">
    <am-flex justify="space-between" align="center">
      <am-card-meta title="My coupons" :description="`Clicked ${count} times`" />
      <RightOutlined style="color: var(--am-color-text-quaternary)" />
    </am-flex>
  </am-card>
</template>
```
