# 国际化

## Description (zh-CN)

使用 `okText` 和 `cancelText` 自定义按钮文字。

## Source

```vue
<template>
  <a-popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    ok-text="Yes"
    cancel-text="No"
  >
    <a-button danger>
      Delete
    </a-button>
  </a-popconfirm>
</template>
```
