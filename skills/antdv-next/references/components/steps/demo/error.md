# 步骤运行错误

## Description (zh-CN)

使用 Steps 的 `status` 属性来指定当前步骤的状态。

## Source

```vue
<script lang="ts" setup>
const content = 'This is a content'
const items = [
  {
    title: 'Finished',
    description: content,
  },
  {
    title: 'In Process',
    description: content,
  },
  {
    title: 'Waiting',
    description: content,
  },
]
</script>

<template>
  <a-steps :current="1" status="error" :items="items" />
</template>
```
