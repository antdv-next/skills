# Basic usage

A basic drawer that slides in from the bottom by default and closes when the mask or the close button is clicked.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <am-button type="primary" block @click="open = true">
    Open drawer
  </am-button>
  <am-drawer v-model:open="open" title="Basic drawer">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </am-drawer>
</template>
```
