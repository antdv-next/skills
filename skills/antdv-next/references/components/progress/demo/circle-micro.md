# 响应式进度圈

## Description (zh-CN)

响应式的圈形进度，当 `size` 小于等于 20 的时候，进度信息将不会显示在进度圈里面，而是以 Tooltip 的形式显示。

## Source

```vue
<template>
  <a-flex align="center" gap="small">
    <a-progress
      type="circle"
      rail-color="#e6f4ff"
      :percent="60"
      :stroke-width="20"
      :size="14"
      :format="number => `进行中，已完成${number}%`"
    />
    <span>代码发布</span>
  </a-flex>
</template>
```
