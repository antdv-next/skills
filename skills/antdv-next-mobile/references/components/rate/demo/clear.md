# Clear

By default, clicking the current value again clears the rating. With `allowClear` set to `false` it cannot be cleared, and at least one step is kept while swiping.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const a = ref(3)
const b = ref(3)
</script>

<template>
  <div class="demo-rate-list">
    <div><am-rate v-model:value="a" /> <span>allowClear: true</span></div>
    <div><am-rate v-model:value="b" :allow-clear="false" /> <span>allowClear: false</span></div>
  </div>
</template>

<style scoped>
.demo-rate-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size);
}

.demo-rate-list > div {
  display: flex;
  gap: 12px;
  align-items: center;
}
</style>
```
