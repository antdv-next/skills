# Basic usage

The simplest usage. Rate by tapping or by pressing and swiping left or right. Supports `v-model:value`.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(3)
</script>

<template>
  <am-rate v-model:value="value" />
</template>
```
