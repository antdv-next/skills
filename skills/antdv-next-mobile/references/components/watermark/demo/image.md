# Image watermark

Specify the image URL through `image`. To keep the image sharp and unstretched, set `width` and `height` and upload an image at least twice that size.

## Source

```vue
<template>
  <am-watermark
    :height="30"
    :width="130"
    :gap="[60, 60]"
    image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
  >
    <div style="height: 240px" />
  </am-watermark>
</template>
```
