# Range and step

`min` / `max` limit the range, and the corresponding button is disabled when a boundary is reached; `step` sets the amount of each change and can be a decimal.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(1)
const weight = ref(0.5)
const tens = ref(50)
</script>

<template>
  <am-flex vertical gap="middle">
    <am-flex align="center" justify="space-between">
      <span>1 ~ 5</span>
      <am-input-number v-model:value="count" :min="1" :max="5" />
    </am-flex>
    <am-flex align="center" justify="space-between">
      <span>Step 0.1</span>
      <am-input-number v-model:value="weight" :min="0" :max="2" :step="0.1" />
    </am-flex>
    <am-flex align="center" justify="space-between">
      <span>Step 10</span>
      <am-input-number v-model:value="tens" :min="0" :max="100" :step="10" />
    </am-flex>
  </am-flex>
</template>
```
