# 左右偏移

## Description (zh-CN)

列偏移。

使用 `offset` 可以将列向右侧偏。例如，`offset={4}` 将元素向右侧偏移 4 个列宽。

## Source

```vue
<template>
  <a-row>
    <a-col :span="8">
      col-8
    </a-col>
    <a-col :span="8" :offset="8">
      col-8
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="6" :offset="6">
      col-6 col-offset-6
    </a-col>
    <a-col :span="6" :offset="6">
      col-6 col-offset-6
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="12" :offset="6">
      col-12 col-offset-6
    </a-col>
  </a-row>
</template>
```
