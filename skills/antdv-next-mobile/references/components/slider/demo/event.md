# Events

`change` fires continuously while dragging and `changeComplete` fires when the finger leaves, which suits sending a request only after release.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const changing = ref(20)
const completed = ref(20)
</script>

<template>
  <am-slider :default-value="20" @change="changing = $event" @change-complete="completed = $event" />
  <div class="demo-slider-text">
    change: {{ changing }} / changeComplete: {{ completed }}
  </div>
</template>

<style scoped>
.demo-slider-text {
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size);
}
</style>
```
