# 边缘形状

## Description (zh-CN)

通过设定 `strokeLinecap="butt"` 可以将进度条边缘的形状从闭合的圆形的圆弧调整为断口，详见 [stroke-linecap](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap)。

## Source

```vue
<template>
  <a-flex vertical gap="small">
    <a-progress stroke-linecap="butt" :percent="75" />
    <a-flex wrap gap="small">
      <a-progress stroke-linecap="butt" type="circle" :percent="75" />
      <a-progress stroke-linecap="butt" type="dashboard" :percent="75" />
    </a-flex>
  </a-flex>
</template>
```
