# 自定义 Icon 图标

## Description (zh-CN)

自定义提示 `icon`。

## Source

```vue
<script setup lang="ts">
import { QuestionCircleOutlined } from '@antdv-next/icons'
</script>

<template>
  <a-popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
  >
    <template #icon>
      <QuestionCircleOutlined style="color: red" />
    </template>
    <a-button danger>
      Delete
    </a-button>
  </a-popconfirm>
</template>
```
