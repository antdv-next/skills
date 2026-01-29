# 自定义语义结构的样式和类

## Description (zh-CN)

通过 `classes` 和 `styles` 传入对象/函数可以自定义 Image 的[语义化结构](#semantic-dom)样式。

## Source

```vue
<script setup lang="ts">
const sharedProps = {
  src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  width: 160,
  alt: '示例图片',
}

const imageStyles = {
  root: {
    padding: '4px',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  image: {
    borderRadius: '4px',
  },
}

const previewImageStyles = {
  root: {
    border: '2px solid #A594F9',
    borderRadius: '8px',
    padding: '4px',
    transition: 'all 0.3s ease',
  },
  image: {
    borderRadius: '4px',
    filter: 'grayscale(50%)',
  },
}
</script>

<template>
  <a-flex gap="middle">
    <a-image v-bind="sharedProps" :styles="imageStyles" />
    <a-image v-bind="sharedProps" :styles="previewImageStyles" :preview="{ open: false }" />
  </a-flex>
</template>
```
