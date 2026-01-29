# 使用 iconfont.cn 的多个资源

## Description (zh-CN)

`scriptUrl` 可引用多个资源，用户可灵活的管理 [iconfont.cn](http://iconfont.cn/) 图标。如果资源的图标出现重名，会按照数组顺序进行覆盖。

## Source

```vue
<script setup lang="ts">
import { createFromIconfontCN } from '@antdv-next/icons'

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overridden)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
})
</script>

<template>
  <a-space>
    <IconFont type="icon-javascript" />
    <IconFont type="icon-java" />
    <IconFont type="icon-shoppingcart" />
    <IconFont type="icon-python" />
  </a-space>
</template>
```
