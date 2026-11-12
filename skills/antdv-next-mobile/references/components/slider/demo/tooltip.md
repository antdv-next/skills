# Value tooltip

A value tooltip is shown above the handle while dragging by default. `tooltip.formatter` formats the content, and setting it to `null` hides the tooltip; the tooltip is always shown when `tooltip.open` is `true`.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const a = ref(30)
const b = ref<[number, number]>([20, 70])
const c = ref(50)
const formatter = (value: number) => `${value}%`
</script>

<template>
  <div class="demo-slider-list">
    <div>
      <p>Format as percentage</p>
      <am-slider v-model:value="a" :tooltip="{ formatter }" />
    </div>
    <div class="demo-slider-open">
      <p>Always visible</p>
      <am-slider v-model:value="b" range :tooltip="{ open: true }" />
    </div>
    <div>
      <p>Hide tooltip</p>
      <am-slider v-model:value="c" :tooltip="{ formatter: null }" />
    </div>
  </div>
</template>

<style scoped>
.demo-slider-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.demo-slider-list p {
  margin: 0;
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size);
}

.demo-slider-open p {
  margin-bottom: 28px;
}
</style>
```
