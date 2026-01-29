# 浮动按钮组

## Description (zh-CN)

按钮组合使用时，推荐使用 `<a-float-button-group />`，并通过设置 `shape` 属性改变悬浮按钮组的形状。悬浮按钮组的 `shape` 会覆盖内部 FloatButton 的 `shape` 属性。

## Source

```vue
<script setup lang="ts">
import { QuestionCircleOutlined, SyncOutlined } from '@antdv-next/icons'
</script>

<template>
  <a-float-button-group shape="circle" style="inset-inline-end: 24px;">
    <a-float-button>
      <template #icon>
        <QuestionCircleOutlined />
      </template>
    </a-float-button>
    <a-float-button />
    <a-float-back-top :visibility-height="0" />
  </a-float-button-group>
  <a-float-button-group shape="square" style="inset-inline-end: 94px;">
    <a-float-button>
      <template #icon>
        <QuestionCircleOutlined />
      </template>
    </a-float-button>
    <a-float-button />
    <a-float-button>
      <template #icon>
        <SyncOutlined />
      </template>
    </a-float-button>
    <a-float-back-top :visibility-height="0" />
  </a-float-button-group>
</template>
```
