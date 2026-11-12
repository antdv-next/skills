# Limit the number of selections

`max` of `Checkbox.Group` limits the number of selections. Once the limit is reached, the remaining options are disabled automatically.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(['Reading', 'Music'])
const options = ['Reading', 'Music', 'Sports', 'Travel']
</script>

<template>
  <am-flex vertical gap="small">
    <div>Select up to 2 ({{ value.length }} selected)</div>
    <am-checkbox-group v-model:value="value" :options="options" :max="2" />
  </am-flex>
</template>
```
