# Close button

`closable` supports an object form: customize the icon, move it to the start of the header, or disable it. Set it to `false` to hide the close button.

## Source

```vue
<script setup lang="ts">
import { LeftOutlined } from '@antdv-next/icons'
import { h, ref } from 'vue'

const start = ref(false)
const none = ref(false)
</script>

<template>
  <am-flex vertical gap="small">
    <am-button block @click="start = true">
      Close button at start
    </am-button>
    <am-button block @click="none = true">
      No close button, no title
    </am-button>
  </am-flex>
  <am-drawer
    v-model:open="start"
    title="Settings"
    placement="right"
    size="large"
    :round="false"
    :closable="{ placement: 'start', closeIcon: () => h(LeftOutlined) }"
  >
    <p>A fullscreen right drawer, like a new page.</p>
  </am-drawer>
  <am-drawer v-model:open="none" :closable="false">
    <p>A drawer without a header. Tap the mask to close.</p>
  </am-drawer>
</template>
```
