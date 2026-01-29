# 范围可拖拽

## Description (zh-CN)

可以设置 `range.draggableTrack`，使得范围刻度整体可拖拽。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref([20, 50])
</script>

<template>
  <a-slider v-model:value="value" :range="{ draggableTrack: true }" />
</template>
```
