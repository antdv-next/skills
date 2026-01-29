# 自定义渲染类型

## Description (zh-CN)

通过设置 `type` 自定义渲染结果，提供 `canvas` 和 `svg` 两个选项。

## Source

```vue
<template>
  <a-space>
    <a-qrcode type="canvas" value="https://www.antdv-next.com" />
    <a-qrcode type="svg" value="https://www.antdv-next.com" />
  </a-space>
</template>
```
