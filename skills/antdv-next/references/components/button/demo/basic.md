# 语法糖

## Description (zh-CN)

通过 `type` 语法糖，使用预设的按钮样式：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。推荐主按钮在同一个操作区域最多出现一次。

## Source

```vue
<template>
  <a-flex gap="small" wrap>
    <a-button type="primary">
      Primary Button
    </a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">
      Dashed Button
    </a-button>
    <a-button type="text">
      Text Button
    </a-button>
    <a-button type="link">
      Link Button
    </a-button>
  </a-flex>
</template>
```
