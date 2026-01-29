# 基本用法

## Description (zh-CN)

通过 `@antdv-next/icons` 引用 Icon 组件，不同主题的 Icon 组件名为图标名加主题做为后缀，也可以通过设置 `spin` 属性来实现动画旋转效果。

## Source

```vue
<script setup lang="ts">
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@antdv-next/icons'
</script>

<template>
  <a-space>
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined :rotate="180" />
    <LoadingOutlined />
  </a-space>
</template>
```
