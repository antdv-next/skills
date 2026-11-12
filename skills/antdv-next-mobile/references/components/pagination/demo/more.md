# More pages

When there are many pages they collapse into ellipses automatically; tap an ellipsis to jump 5 pages backward / forward. `showLessItems` shows fewer page items.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const current = ref(10)
</script>

<template>
  <am-flex vertical gap="large">
    <am-pagination v-model:current="current" :total="500" />
    <am-pagination v-model:current="current" :total="500" show-less-items />
  </am-flex>
</template>
```
