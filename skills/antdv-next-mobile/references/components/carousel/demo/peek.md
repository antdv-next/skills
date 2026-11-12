# Peek adjacent cards

Use `slideSize` and `trackOffset` (both percentages) to let the adjacent cards peek out. In non-infinite mode `stuckAtBoundary` makes the first and last cards stick to the edge.

## Source

```vue
<script setup lang="ts">
const colors = ['#1677ff', '#13c2c2', '#722ed1', '#eb2f96', '#fa8c16']
</script>

<template>
  <p class="title">
    Infinite
  </p>
  <am-carousel :slide-size="80" :track-offset="10" :dots="false">
    <div v-for="(color, index) in colors" :key="color" class="card">
      <div class="card-inner" :style="{ background: color }">
        {{ index + 1 }}
      </div>
    </div>
  </am-carousel>
  <p class="title">
    Not infinite, stuck at boundary
  </p>
  <am-carousel :slide-size="80" :track-offset="10" :infinite="false" :dots="false">
    <div v-for="(color, index) in colors" :key="color" class="card">
      <div class="card-inner" :style="{ background: color }">
        {{ index + 1 }}
      </div>
    </div>
  </am-carousel>
</template>

<style scoped>
.title {
  margin: 0 0 8px;
  color: var(--am-color-text-description);
  font-size: 14px;
}

.title:not(:first-child) {
  margin-top: 16px;
}

.card {
  box-sizing: border-box;
  padding: 0 4px;
}

.card-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
  color: #fff;
  font-size: 32px;
  border-radius: 12px;
}
</style>
```
