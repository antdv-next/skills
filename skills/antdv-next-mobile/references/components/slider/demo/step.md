# Step and dots

Set the step with `step`, and `dots` shows a dot for each step. Decimal steps are supported.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const a = ref(40)
const b = ref(0.4)
</script>

<template>
  <am-slider v-model:value="a" :step="20" dots />
  <am-slider v-model:value="b" :min="0" :max="1" :step="0.1" />
  <div class="demo-slider-text">
    {{ a }} / {{ b }}
  </div>
</template>

<style scoped>
.demo-slider-text {
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size);
}
</style>
```
