# 自定义状态

## Description (zh-CN)

使用 `status` 为 Cascader 添加状态，可选 `error` 或者 `warning`。

## Source

```vue
<template>
  <a-space vertical>
    <a-cascader status="error" placeholder="Error" />
    <a-cascader status="warning" multiple placeholder="Warning multiple" />
  </a-space>
</template>
```
