# Custom checked values

Customize the values for on / off with `checkedValue` and `unCheckedValue`, which makes it easy to map directly to backend fields.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const status = ref<number>(1)
</script>

<template>
  <am-flex align="center" gap="middle">
    <am-switch v-model:checked="status" :checked-value="1" :un-checked-value="0" />
    <span>status = {{ status }}</span>
  </am-flex>
</template>
```
