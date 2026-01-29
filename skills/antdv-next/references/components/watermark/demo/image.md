# 图片水印

## Description (zh-CN)

通过 `image` 指定图片地址。为保证图片高清且不被拉伸，请设置 width 和 height，并上传至少两倍的宽高的 logo 图片地址。

## Source

```vue
<template>
  <a-watermark :height="30" :width="130" image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original">
    <div class="h-500px" />
  </a-watermark>
</template>
```
