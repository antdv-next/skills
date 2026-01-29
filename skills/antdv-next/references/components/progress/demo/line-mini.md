# 小型进度条

## Description (zh-CN)

适合放在较狭窄的区域内。

## Source

```vue
<template>
  <a-flex vertical gap="small" style="width: 180px">
    <a-progress :percent="30" size="small" />
    <a-progress :percent="50" size="small" status="active" />
    <a-progress :percent="70" size="small" status="exception" />
    <a-progress :percent="100" size="small" />
  </a-flex>
</template>
```
