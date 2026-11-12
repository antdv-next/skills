# Configured with options

Quickly generate a group of radios with `options`, which supports strings, numbers or `{ label, value, disabled }` objects.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const fruit = ref('Apple')
const plain = ['Apple', 'Pear', 'Orange']

const city = ref('hz')
const options = [
  { label: 'Hangzhou', value: 'hz' },
  { label: 'Shanghai', value: 'sh' },
  { label: 'Beijing', value: 'bj', disabled: true },
]
</script>

<template>
  <am-flex vertical gap="small">
    <am-radio-group v-model:value="fruit" :options="plain" />
    <am-radio-group v-model:value="city" :options="options" />
  </am-flex>
</template>
```
