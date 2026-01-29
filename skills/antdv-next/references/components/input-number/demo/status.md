# 自定义状态

## Description (zh-CN)

使用 `status` 为 InputNumber 添加状态，可选 `error` 或者 `warning`。

## Source

```vue
<script setup lang="ts">
import { ClockCircleOutlined } from '@antdv-next/icons'
</script>

<template>
  <a-space direction="vertical" style="width: 100%;">
    <a-input-number status="error" style="width: 100%;" />
    <a-input-number status="warning" style="width: 100%;" />
    <a-input-number status="error" style="width: 100%;">
      <template #prefix>
        <ClockCircleOutlined />
      </template>
    </a-input-number>
    <a-input-number status="warning" style="width: 100%;">
      <template #prefix>
        <ClockCircleOutlined />
      </template>
    </a-input-number>
  </a-space>
</template>
```
