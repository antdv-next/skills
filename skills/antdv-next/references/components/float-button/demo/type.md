# 类型

## Description (zh-CN)

通过 `type` 改变悬浮按钮的类型。

## Source

```vue
<script setup lang="ts">
import { QuestionCircleOutlined } from '@antdv-next/icons'
</script>

<template>
  <a-float-button type="primary" style="inset-inline-end: 24px;">
    <template #icon>
      <QuestionCircleOutlined />
    </template>
  </a-float-button>
  <a-float-button type="default" style="inset-inline-end: 94px;">
    <template #icon>
      <QuestionCircleOutlined />
    </template>
  </a-float-button>
</template>
```
