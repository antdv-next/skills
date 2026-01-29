# 栅格排序

## Description (zh-CN)

列排序。

通过使用 `push` 和 `pull` 可以很容易地改变列的顺序。

## Source

```vue
<template>
  <a-row>
    <a-col :span="18" :push="6">
      col-18 col-push-6
    </a-col>
    <a-col :span="6" :pull="18">
      col-6 col-pull-18
    </a-col>
  </a-row>
</template>
```
