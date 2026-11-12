# Range

Set `range` to enable the dual handle mode, where `value` is `[number, number]`. The two handles can cross each other, and the result is always sorted in ascending order.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref<[number, number]>([20, 60])
</script>

<template>
  <am-slider v-model:value="value" range />
  <div class="demo-slider-text">
    Price range: ¥{{ value[0] }} - ¥{{ value[1] }}
  </div>
</template>

<style scoped>
.demo-slider-text {
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size);
}
</style>
```
