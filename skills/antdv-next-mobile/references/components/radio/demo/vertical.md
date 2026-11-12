# Vertical layout

Set `vertical` (or `orientation="vertical"`) to lay the options out vertically.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref('standard')
</script>

<template>
  <am-radio-group v-model:value="value" vertical>
    <am-radio value="standard">
      Standard delivery (3-5 days)
    </am-radio>
    <am-radio value="express">
      Express delivery (next day)
    </am-radio>
    <am-radio value="self">
      Store pickup
    </am-radio>
  </am-radio-group>
</template>
```
