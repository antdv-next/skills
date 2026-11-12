# Custom checked value

Customize the value of `checked` when checked / unchecked with `checkedValue` and `unCheckedValue`, which makes it easy to map to backend fields directly.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const agree = ref('N')
</script>

<template>
  <am-flex vertical gap="small">
    <am-checkbox v-model:checked="agree" checked-value="Y" un-checked-value="N">
      I have read and agree to the terms
    </am-checkbox>
    <div>Current value: {{ agree }}</div>
  </am-flex>
</template>
```
