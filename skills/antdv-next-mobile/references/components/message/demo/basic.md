# Basic usage

The most basic global message, dismissed automatically after 3 seconds.

## Source

```vue
<script setup lang="ts">
import { message } from '@antdv-next/mobile'

function info() {
  message.info('This is a normal message')
}
</script>

<template>
  <am-button type="primary" block @click="info">
    Show message
  </am-button>
</template>
```
