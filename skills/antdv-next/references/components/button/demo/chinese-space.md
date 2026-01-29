# 移除两个汉字之间的空格

## Description (zh-CN)

我们默认在两个汉字之间添加空格，可以通过设置 `autoInsertSpace` 为 `false` 关闭。

## Source

```vue
<template>
  <a-flex gap="small" wrap>
    <a-button type="primary" :auto-insert-space="false">
      确定
    </a-button>
    <a-button type="primary" auto-insert-space>
      确定
    </a-button>
  </a-flex>
</template>
```
