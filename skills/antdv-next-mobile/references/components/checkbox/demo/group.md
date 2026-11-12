# Checkbox group

`Checkbox.Group` generates a group of checkboxes quickly through `options`, and `Checkbox` can also be composed freely in the default slot.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const fruits = ref(['Apple'])
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
]

const cities = ref<string[]>(['hangzhou'])
</script>

<template>
  <am-flex vertical gap="middle">
    <am-checkbox-group v-model:value="fruits" :options="options" />
    <am-checkbox-group v-model:value="cities">
      <am-checkbox value="hangzhou">
        Hangzhou
      </am-checkbox>
      <am-checkbox value="shanghai">
        Shanghai
      </am-checkbox>
      <am-checkbox value="beijing">
        Beijing
      </am-checkbox>
    </am-checkbox-group>
    <div>Selected: {{ [...fruits, ...cities].join(', ') || 'None' }}</div>
  </am-flex>
</template>
```
