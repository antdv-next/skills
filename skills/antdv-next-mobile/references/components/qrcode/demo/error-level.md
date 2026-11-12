# Error level

Set the error correction level with `errorLevel`: a higher level survives more damage but makes the code denser. Turn `boostLevel` off to use exactly the given level.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const level = ref<'L' | 'M' | 'Q' | 'H'>('L')
</script>

<template>
  <am-flex vertical align="center" gap="middle">
    <am-qrcode
      value="https://github.com/antdv-next/antdv-next-mobile"
      :error-level="level"
      :boost-level="false"
    />
    <am-segmented v-model:value="level" :options="['L', 'M', 'Q', 'H']" />
  </am-flex>
</template>
```
