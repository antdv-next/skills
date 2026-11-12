# Helper text

There is no hover tooltip on mobile, so a helper text matching the value can be shown next to the rating.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful']
const value = ref(3)
</script>

<template>
  <div class="demo-rate-text">
    <am-rate v-model:value="value" />
    <span v-if="value">{{ desc[value - 1] }}</span>
  </div>
</template>

<style scoped>
.demo-rate-text {
  display: flex;
  gap: 12px;
  align-items: center;
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size);
}
</style>
```
