# Simple mode

`simple` is the simple mode recommended for mobile: previous / next buttons on both sides with the current page and the total pages in the middle. The texts follow the locale of `ConfigProvider`.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const current = ref(2)
</script>

<template>
  <am-pagination v-model:current="current" simple :total="86" />
</template>
```
