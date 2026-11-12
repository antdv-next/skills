# Custom style

`LoadingBar.config()` sets the color, thickness and distance to the top globally, for example to show the bar below a fixed nav bar.

## Source

```vue
<script setup lang="ts">
import { LoadingBar } from '@antdv-next/mobile'
import { onBeforeUnmount } from 'vue'

function run(options: Parameters<typeof LoadingBar.config>[0]) {
  LoadingBar.config({ color: undefined, height: undefined, top: undefined, ...options })
  LoadingBar.start()
  setTimeout(LoadingBar.finish, 1500)
}

onBeforeUnmount(() => LoadingBar.config({ color: undefined, height: undefined, top: undefined }))
</script>

<template>
  <am-flex vertical gap="small">
    <am-button block @click="run({ color: '#52c41a' })">
      Custom color
    </am-button>
    <am-button block @click="run({ height: 6 })">
      Thicker bar
    </am-button>
    <am-button block @click="run({ top: 44 })">
      44px from the top
    </am-button>
  </am-flex>
</template>
```
