# Autoplay

`autoplay` turns on automatic playing and `autoplaySpeed` sets the interval. When `{ dotDuration: true }` is passed, the current dot shows the playing progress. It pauses while a finger is holding it or the page is hidden.

## Source

```vue
<script setup lang="ts">
const colors = ['#1677ff', '#13c2c2', '#722ed1', '#eb2f96']
</script>

<template>
  <am-carousel :autoplay="{ dotDuration: true }" :autoplay-speed="2500">
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
  height: 160px;
  color: #fff;
  font-size: 32px;
  border-radius: 8px;
}
</style>
```
