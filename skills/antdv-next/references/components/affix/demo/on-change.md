# 固定状态改变的回调

## Description (zh-CN)

可以获得是否固定的状态。

## Source

```vue
<template>
  <a-affix :offset-top="120" @change="(affixed) => console.log(affixed)">
    <a-button>
      120px to affix top
    </a-button>
  </a-affix>
</template>
```
