# Basic usage

Control the visibility with `v-model:open`. With `closable` set, clicking the mask closes it.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <am-button type="primary" block @click="open = true">
    Show mask
  </am-button>
  <am-mask v-model:open="open" closable />
</template>
```
