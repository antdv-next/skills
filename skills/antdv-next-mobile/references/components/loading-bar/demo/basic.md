# Basic

`LoadingBar.start()` shows a bar at the top of the page that creeps forward, `finish()` completes and fades it out, and `error()` ends it in the error color.

## Source

```vue
<script setup lang="ts">
import { LoadingBar } from '@antdv-next/mobile'

function request() {
  LoadingBar.start()
  setTimeout(LoadingBar.finish, 2000)
}
</script>

<template>
  <am-flex vertical gap="small">
    <am-button type="primary" block @click="LoadingBar.start()">
      Start
    </am-button>
    <am-button block @click="LoadingBar.finish()">
      Finish
    </am-button>
    <am-button danger block @click="LoadingBar.error()">
      Error
    </am-button>
    <am-button block @click="request">
      Simulate a 2s request
    </am-button>
  </am-flex>
</template>
```
