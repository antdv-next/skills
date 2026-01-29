# 内部卡片

## Description (zh-CN)

可以放在普通卡片内部，展示多层级结构的信息。

## Source

```vue
<template>
  <a-card title="Card title">
    <a-card type="inner" title="Inner Card title">
      <template #extra>
        <a href="#">More</a>
      </template>
      Inner Card content
    </a-card>
    <a-card style="margin-top: 16px" type="inner" title="Inner Card title">
      <template #extra>
        <a href="#">More</a>
      </template>
      Inner Card content
    </a-card>
  </a-card>
</template>
```
