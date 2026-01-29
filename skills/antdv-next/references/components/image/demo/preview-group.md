# 多张图片预览

## Description (zh-CN)

点击左右切换按钮可以预览多张图片。

## Source

```vue
<template>
  <a-image-preview-group>
    <a-image
      alt="svg image"
      :width="200"
      src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
    />
    <a-image
      :width="200"
      alt="svg image"
      src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
    />
  </a-image-preview-group>
</template>
```
