# 基础栅格

## Description (zh-CN)

从堆叠到水平排列。

使用一组 `Row` 和 `Col` 创建基础栅格，所有列（Col）必须放在 `Row` 内。

## Source

```vue
<template>
  <a-row>
    <a-col :span="24">
      col
    </a-col>
  </a-row>

  <a-row>
    <a-col :span="12">
      col-12
    </a-col>
    <a-col :span="12">
      col-12
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="8">
      col-8
    </a-col>
    <a-col :span="8">
      col-8
    </a-col>
    <a-col :span="8">
      col-8
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="6">
      col-6
    </a-col>
    <a-col :span="6">
      col-6
    </a-col>
    <a-col :span="6">
      col-6
    </a-col>
    <a-col :span="6">
      col-6
    </a-col>
  </a-row>
</template>
```
