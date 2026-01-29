# 幽灵按钮

## Description (zh-CN)

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

## Source

```vue
<template>
  <a-flex wrap gap="small" class="site-button-ghost-wrapper">
    <a-button type="primary" ghost>
      Primary
    </a-button>
    <a-button ghost>
      Default
    </a-button>
    <a-button type="dashed" ghost>
      Dashed
    </a-button>
    <a-button type="primary" danger ghost>
      Danger
    </a-button>
  </a-flex>
</template>
```
