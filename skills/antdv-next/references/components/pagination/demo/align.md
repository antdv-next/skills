# 对齐

## Description (zh-CN)

通过 `align` 设置分页对齐方式。

## Source

```vue
<template>
  <a-space direction="vertical" size="middle" style="width: 100%">
    <a-pagination align="start" :default-current="1" :total="50" />
    <a-pagination align="center" :default-current="1" :total="50" />
    <a-pagination align="end" :default-current="1" :total="50" />
  </a-space>
</template>
```
