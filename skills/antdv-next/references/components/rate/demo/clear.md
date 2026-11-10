# Clear star

## Description (en-US)

Support set allow to clear star when click again.

## Source

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const val = ref(3)
const val1 = ref(3)
</script>

<template>
  <a-flex gap="medium" vertical>
    <a-flex gap="medium">
      <a-rate v-model:value="val" />
      <span>allowClear: true</span>
    </a-flex>
    <a-flex gap="medium">
      <a-rate v-model:value="val1" :allow-clear="false" />
      <span>allowClear: false</span>
    </a-flex>
  </a-flex>
</template>
```
