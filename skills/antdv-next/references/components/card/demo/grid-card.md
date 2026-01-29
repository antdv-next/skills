# 网格型内嵌卡片

## Description (zh-CN)

一种常见的卡片内容区隔模式。

## Source

```vue
<script setup lang="ts">
import type { CSSProperties } from 'vue'

const gridStyle: CSSProperties = {
  width: '25%',
  textAlign: 'center',
}
</script>

<template>
  <a-card title="Card Title">
    <a-card-grid :style="gridStyle">
      Content
    </a-card-grid>
    <a-card-grid :hoverable="false" :style="gridStyle">
      Content
    </a-card-grid>
    <a-card-grid :style="gridStyle">
      Content
    </a-card-grid>
    <a-card-grid :style="gridStyle">
      Content
    </a-card-grid>
    <a-card-grid :style="gridStyle">
      Content
    </a-card-grid>
    <a-card-grid :style="gridStyle">
      Content
    </a-card-grid>
    <a-card-grid :style="gridStyle">
      Content
    </a-card-grid>
  </a-card>
</template>
```
