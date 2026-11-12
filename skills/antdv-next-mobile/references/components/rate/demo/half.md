# Half star

Support selecting half stars through `allowHalf`.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(2.5)
</script>

<template>
  <am-rate v-model:value="value" allow-half />
</template>
```
