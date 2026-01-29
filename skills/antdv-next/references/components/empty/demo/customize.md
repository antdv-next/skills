# 自定义

## Description (zh-CN)

自定义描述与操作区域。

## Source

```vue
<template>
  <a-empty
    :styles="{ image: { height: '60px' } }"
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
  >
    <template #description>
      Customize <a href="#API">Description</a>
    </template>
    <a-button type="primary">
      Create Now
    </a-button>
  </a-empty>
</template>
```
