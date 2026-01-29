# 自定义文字格式

## Description (zh-CN)

`format` 属性指定格式。

## Source

```vue
<template>
  <a-flex gap="small" wrap>
    <a-progress type="circle" :percent="75" :format="percent => `${percent} Days`" />
    <a-progress type="circle" :percent="100" :format="() => 'Done'" />
  </a-flex>
</template>
```
