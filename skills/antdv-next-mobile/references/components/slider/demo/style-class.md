# Custom handle and component tokens

Customize the handle content with the `handle` slot, and the rail and handle with CSS variables and `classes` / `styles`.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(40)
</script>

<template>
  <div class="demo-slider-list">
    <am-slider v-model:value="value" class="demo-slider-custom" :tooltip="{ formatter: null }">
      <template #handle="{ value: current }">
        <span class="demo-slider-handle">{{ current }}</span>
      </template>
    </am-slider>
    <am-slider
      class="demo-slider-success"
      :default-value="60"
      :styles="{ rail: { borderRadius: 0 }, track: { borderRadius: 0 } }"
    />
  </div>
</template>

<style scoped>
.demo-slider-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.demo-slider-custom {
  --am-slider-rail-size: 8px;
  --am-slider-handle-size: 32px;
}

.demo-slider-handle {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  color: var(--am-color-text-light-solid);
  font-size: var(--am-font-size-sm);
  background: var(--am-color-primary);
  border: 2px solid var(--am-color-bg-container);
  border-radius: 50%;
  box-shadow: var(--am-box-shadow-secondary);
}

.demo-slider-success {
  --am-slider-rail-size: 6px;
  --am-slider-track-bg: var(--am-color-success);
}
</style>
```
