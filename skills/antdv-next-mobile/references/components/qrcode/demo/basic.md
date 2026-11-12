# Basic usage

Basic usage: pass a `value`. It renders a `canvas` by default and the colors follow the theme.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const text = ref('https://www.antdv-next.com')
</script>

<template>
  <am-flex vertical align="center" gap="middle">
    <am-qrcode :value="text || '-'" />
    <am-input v-model:value="text" placeholder="Text to encode" :maxlength="60" style="width: 100%" />
  </am-flex>
</template>
```
