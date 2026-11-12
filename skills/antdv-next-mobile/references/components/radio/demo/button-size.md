# Button size and full width

The button style supports three sizes: `small`, `middle` and `large`; with `block` set it fills the parent and splits the width equally.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref('a')
const options = [
  { label: 'All', value: 'a' },
  { label: 'Unpaid', value: 'b' },
  { label: 'Shipped', value: 'c' },
]
</script>

<template>
  <am-flex vertical gap="middle">
    <am-radio-group v-model:value="value" :options="options" option-type="button" size="small" />
    <am-radio-group v-model:value="value" :options="options" option-type="button" />
    <am-radio-group v-model:value="value" :options="options" option-type="button" size="large" />
    <am-radio-group v-model:value="value" :options="options" option-type="button" button-style="solid" block />
  </am-flex>
</template>
```
