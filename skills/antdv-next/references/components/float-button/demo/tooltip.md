# 含有气泡卡片的悬浮按钮

## Description (zh-CN)

设置 tooltip 属性，即可开启气泡卡片。

## Source

```vue
<template>
  <a-float-button
    style="inset-block-end: 108px;"
    :tooltip="{
      title: 'Since 5.25.0+',
      color: 'blue',
      placement: 'top',
    }"
  />
  <a-float-button>
    <template #tooltip>
      <div>Documents</div>
    </template>
  </a-float-button>
</template>
```
