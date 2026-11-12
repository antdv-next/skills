# Manual control

Call `prev`, `next` and `goTo` through a ref. When `infinite` is `false` it stops at the first and last slides; when `draggable` is `false` gestures are disabled.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const colors = ['#1677ff', '#13c2c2', '#722ed1', '#eb2f96']
const carouselRef = ref()
</script>

<template>
  <am-carousel ref="carouselRef" :infinite="false" :draggable="false">
    <div v-for="(color, index) in colors" :key="color" class="slide" :style="{ background: color }">
      {{ index + 1 }}
    </div>
  </am-carousel>
  <am-flex gap="small" wrap style="margin-top: 12px">
    <am-button size="small" @click="carouselRef?.prev()">
      Prev
    </am-button>
    <am-button size="small" @click="carouselRef?.next()">
      Next
    </am-button>
    <am-button size="small" @click="carouselRef?.goTo(0)">
      First
    </am-button>
    <am-button size="small" @click="carouselRef?.goTo(3, true)">
      Jump to last
    </am-button>
  </am-flex>
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
