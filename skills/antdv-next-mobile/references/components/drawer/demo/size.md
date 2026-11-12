# Size

`size` supports the `default` and `large` presets, as well as a number (px) or a string. `height` / `width` can also be used to specify the exact size.

## Source

```vue
<script setup lang="ts">
import type { DrawerSize } from '@antdv-next/mobile'
import { ref } from 'vue'

const open = ref(false)
const size = ref<DrawerSize>('default')

function show(value: DrawerSize) {
  size.value = value
  open.value = true
}
</script>

<template>
  <am-flex gap="small" wrap>
    <am-button @click="show('default')">
      default
    </am-button>
    <am-button @click="show('large')">
      large
    </am-button>
    <am-button @click="show(320)">
      320px
    </am-button>
    <am-button @click="show('60%')">
      60%
    </am-button>
  </am-flex>
  <am-drawer v-model:open="open" :size="size" :title="`size = ${size}`">
    <p>Some contents...</p>
  </am-drawer>
</template>
```
