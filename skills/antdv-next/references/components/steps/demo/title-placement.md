# 标签放置位置与进度

## Description (zh-CN)

为点状步骤条增加自定义展示。

## Source

```vue
<script setup lang="ts">
const content = 'This is a content.'

const items = [
  {
    title: 'Finished',
    content,
  },
  {
    title: 'In Progress',
    content,
  },
  {
    title: 'Waiting',
    content,
  },
]
</script>

<template>
  <a-flex vertical gap="middle">
    <a-steps
      :current="1"
      title-placement="vertical"
      :items="items"
      ellipsis
    />
    <a-steps
      :current="1"
      :percent="60"
      title-placement="vertical"
      :items="items"
    />
    <a-steps
      :current="1"
      :percent="80"
      size="small"
      title-placement="vertical"
      :items="items"
    />
  </a-flex>
</template>
```
