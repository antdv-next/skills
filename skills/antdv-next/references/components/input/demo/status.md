# 自定义状态

## Description (zh-CN)

使用 `status` 为 Input 添加状态，可选 `error` 或者 `warning`。

## Source

```vue
<script setup lang="ts">
import { ClockCircleOutlined } from '@antdv-next/icons'
</script>

<template>
  <a-space direction="vertical" style="width: 100%;">
    <a-input status="error" placeholder="Error" />
    <a-input status="warning" placeholder="Warning" />
    <a-input status="error" placeholder="Error with prefix">
      <template #prefix>
        <ClockCircleOutlined />
      </template>
    </a-input>
    <a-input status="warning" placeholder="Warning with prefix">
      <template #prefix>
        <ClockCircleOutlined />
      </template>
    </a-input>
  </a-space>
</template>
```
