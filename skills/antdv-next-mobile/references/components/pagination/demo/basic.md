# Basic usage

Basic pagination. `total` is the total number of data items, 10 per page by default.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const current = ref(1)
</script>

<template>
  <am-pagination v-model:current="current" :total="50" />
</template>
```
