# Placement

Set the direction the drawer slides in from with `placement`.

## Source

```vue
<script setup lang="ts">
import type { DrawerPlacement } from '@antdv-next/mobile'
import { ref } from 'vue'

const open = ref(false)
const placement = ref<DrawerPlacement>('bottom')
const placements: DrawerPlacement[] = ['top', 'right', 'bottom', 'left']

function show(value: DrawerPlacement) {
  placement.value = value
  open.value = true
}
</script>

<template>
  <am-flex gap="small" wrap>
    <am-button v-for="item in placements" :key="item" @click="show(item)">
      {{ item }}
    </am-button>
  </am-flex>
  <am-drawer v-model:open="open" :placement="placement" :title="`Slide from ${placement}`">
    <p>Some contents...</p>
    <p>Some contents...</p>
  </am-drawer>
</template>
```
