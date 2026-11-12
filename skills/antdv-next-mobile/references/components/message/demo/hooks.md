# Get context with hooks

The `ContextHolder` created by `message.useMessage()` is rendered in the component tree, so messages follow the theme of the `ConfigProvider` it sits in. `top`, `maxCount`, etc. can also be configured for this instance alone.

## Source

```vue
<script setup lang="ts">
import { message } from '@antdv-next/mobile'

const [messageApi, ContextHolder] = message.useMessage({ top: 56, maxCount: 2 })
let count = 0

function show() {
  count += 1
  messageApi.success(`Dark message ${count}, at most 2 shown at once`)
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
