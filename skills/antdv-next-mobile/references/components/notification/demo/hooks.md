# Get context with hooks

The `ContextHolder` created by `notification.useNotification()` is rendered in the component tree, so notifications follow the theme and locale of the `ConfigProvider` it sits in. `placement`, `maxCount`, etc. can also be configured for this instance alone.

## Source

```vue
<script setup lang="ts">
import { notification } from '@antdv-next/mobile'

const [api, ContextHolder] = notification.useNotification({ placement: 'bottom', maxCount: 2 })
let count = 0

function show() {
  count += 1
  api.success({
    title: `Dark notification ${count}`,
    description: 'At most 2 are shown at once.',
  })
}
</script>

<template>
  <am-config-provider :theme="{ algorithm: 'dark' }">
    <ContextHolder />
  </am-config-provider>
  <am-button block @click="show">
    Show with hooks
  </am-button>
</template>
```
