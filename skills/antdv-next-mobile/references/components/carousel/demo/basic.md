# Basic usage

Each direct child of the default slot is one slide. Swipe left or right to switch; it loops seamlessly by default.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const colors = ['#1677ff', '#13c2c2', '#722ed1', '#eb2f96']
const current = ref(0)
</script>

<template>
  <am-carousel @after-change="current = $event">
    <div v-for="(color, index) in colors" :key="color" class="slide" :style="{ background: color }">
      {{ index + 1 }}
    </div>
  </am-carousel>
  <p class="tip">
    Current: {{ current + 1 }} / {{ colors.length }}
  </p>
</template>

<style scoped>
.slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  color: #fff;
  font-size: 32px;
  border-radius: 8px;
}

.tip {
  margin: 12px 0 0;
  color: var(--am-color-text-description);
  font-size: 14px;
}
</style>
```
