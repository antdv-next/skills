# 自定义语义结构的样式和类

## Description (zh-CN)

您可以通过 `classes` 和 `styles` 传入对象/函数来自定义 Select 的语义化 DOM 样式。

## Source

```vue
<script setup lang="ts">
import { MehOutlined } from '@antdv-next/icons'

const options = [
  { value: 'GuangZhou', label: 'GuangZhou' },
  { value: 'ShenZhen', label: 'ShenZhen' },
]

const stylesObject = {
  prefix: {
    color: '#1890ff',
  },
  suffix: {
    color: '#1890ff',
  },
}

const stylesFilled = {
  prefix: {
    color: '#722ed1',
  },
  suffix: {
    color: '#722ed1',
  },
  popup: {
    root: {
      border: '1px solid #722ed1',
    },
  },
}
</script>

<template>
  <a-flex vertical gap="middle">
    <a-select
      :options="options"
      :classes="{ root: 'custom-select' }"
      :styles="stylesObject"
      placeholder="Object"
    >
      <template #prefix>
        <MehOutlined />
      </template>
    </a-select>
    <a-select
      :options="options"
      :classes="{ root: 'custom-select' }"
      :styles="stylesFilled"
      placeholder="Function"
      variant="filled"
    >
      <template #prefix>
        <MehOutlined />
      </template>
    </a-select>
  </a-flex>
</template>

<style>
.custom-select {
  border-radius: 8px;
  width: 300px;
}
</style>
```
