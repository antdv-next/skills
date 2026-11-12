# Stack

More than 3 notifications (`stack.threshold`) on one edge collapse into a stack: tap it to expand, tap elsewhere to fold it again. Turn stacking off with `notification.config({ stack: false })`, and limit the number with `maxCount`.

## Source

```vue
<script setup lang="ts">
import { notification } from '@antdv-next/mobile'

let count = 0

function open() {
  count += 1
  notification.open({
    title: `Notification ${count}`,
    description: 'Open a few more to see them stack.',
    duration: 8,
  })
}
</script>

<template>
  <am-flex vertical gap="small">
    <am-button type="primary" block @click="open">
      Open one more
    </am-button>
    <am-button block @click="notification.destroy()">
      Destroy all
    </am-button>
  </am-flex>
</template>
```
