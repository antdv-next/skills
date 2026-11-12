# Position

Set the vertical position with `position`.

## Source

```vue
<script setup lang="ts">
import type { ToastPosition } from '@antdv-next/mobile'
import { Toast } from '@antdv-next/mobile'

function show(position: ToastPosition) {
  Toast.show({ content: `Position: ${position}`, position })
}
</script>

<template>
  <am-flex gap="small" wrap>
    <am-button @click="show('top')">
      Top
    </am-button>
    <am-button @click="show('center')">
      Center
    </am-button>
    <am-button @click="show('bottom')">
      Bottom
    </am-button>
  </am-flex>
</template>
```
