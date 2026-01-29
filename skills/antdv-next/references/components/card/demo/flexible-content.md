# 更灵活的内容展示

## Description (zh-CN)

可以利用 `a-card-meta` 支持更灵活的内容。

## Source

```vue
<template>
  <a-card hoverable style="width: 240px">
    <template #cover>
      <img
        draggable="false"
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      >
    </template>
    <a-card-meta title="Europe Street beat" description="www.instagram.com" />
  </a-card>
</template>
```
