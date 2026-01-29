# 描述

## Description (zh-CN)

可以通过 `content` 设置文字内容。

> 仅当 `shape` 属性为 `square` 时支持。由于空间较小，推荐使用比较精简的双数文字。

## Source

```vue
<script setup lang="ts">
import { FileTextOutlined } from '@antdv-next/icons'
</script>

<template>
  <a-float-button
    shape="square"
    content="HELP INFO"
    style="inset-inline-end: 24px;"
  >
    <template #icon>
      <FileTextOutlined />
    </template>
  </a-float-button>
  <a-float-button
    shape="square"
    content="HELP INFO"
    style="inset-inline-end: 94px;"
  />
  <a-float-button
    shape="square"
    content="HELP"
    style="inset-inline-end: 164px;"
  >
    <template #icon>
      <FileTextOutlined />
    </template>
  </a-float-button>
</template>
```
