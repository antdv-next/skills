# Basic usage

A basic modal, with visibility controlled by `v-model:open`. Clicking Cancel or the mask fires `cancel` and closes it; clicking OK only fires `ok`, and you need to close it yourself.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <am-button type="primary" block @click="open = true">
    Open modal
  </am-button>
  <am-modal v-model:open="open" title="Title" @ok="open = false">
    This is the content of the modal, explaining the current action.
  </am-modal>
</template>
```
