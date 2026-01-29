# 响应式布局

## Description (zh-CN)

参照 Bootstrap 的响应式设计，预设六个响应尺寸：`xs` `sm` `md` `lg` `xl` `xxl`。

## Source

```vue
<template>
  <a-row>
    <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
      Col
    </a-col>
    <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
      Col
    </a-col>
    <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
      Col
    </a-col>
  </a-row>
</template>
```
