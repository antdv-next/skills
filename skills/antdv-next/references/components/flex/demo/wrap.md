# 自动换行

## Description (zh-CN)

自动换行。

## Source

```vue
<template>
  <a-flex wrap="wrap" gap="small">
    <a-button v-for="item in new Array(24)" :key="item" type="primary">
      Button
    </a-button>
  </a-flex>
</template>
```
