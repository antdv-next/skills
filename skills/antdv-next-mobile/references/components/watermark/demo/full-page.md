# Full-page watermark

`fullPage` makes the watermark fixed and cover the whole page, which suits a global watermark for internal systems.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <am-button type="primary" block @click="visible = !visible">
    {{ visible ? 'Hide' : 'Show' }} watermark
  </am-button>
  <am-watermark v-if="visible" full-page :content="['Internal', 'Do not share']" :gap="[60, 80]" />
</template>
```
