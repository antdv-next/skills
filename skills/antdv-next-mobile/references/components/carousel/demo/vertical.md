# Vertical scrolling

Set `vertical` (or set `dotPlacement` to `start` / `end`) to scroll vertically. The component needs an explicit height.

## Source

```vue
<script setup lang="ts">
const colors = ['#1677ff', '#13c2c2', '#722ed1', '#eb2f96']
</script>

<template>
  <am-carousel dot-placement="end" autoplay style="height: 160px">
    <div v-for="(color, index) in colors" :key="color" class="slide" :style="{ background: color }">
      {{ index + 1 }}
    </div>
  </am-carousel>
</template>

<style scoped>
.slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
  font-size: 32px;
  border-radius: 8px;
}
</style>
```
