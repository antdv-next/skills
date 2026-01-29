# 状态

## Description (zh-CN)

使用 `status` 为 TreeSelect 添加状态，可选 `error` 或者 `warning`。

## Source

```vue
<template>
  <a-space direction="vertical" style="width: 100%">
    <a-tree-select status="error" style="width: 100%" placeholder="Error" />
    <a-tree-select status="warning" style="width: 100%" multiple placeholder="Warning multiple" />
  </a-space>
</template>
```
