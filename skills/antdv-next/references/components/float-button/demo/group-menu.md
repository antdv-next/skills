# 菜单模式

## Description (zh-CN)

设置 `trigger` 属性即可开启菜单模式。提供 `hover` 和 `click` 两种触发方式。

## Source

```vue
<script setup lang="ts">
import { CommentOutlined, CustomerServiceOutlined } from '@antdv-next/icons'
</script>

<template>
  <a-float-button-group
    trigger="click"
    type="primary"
    shape="square"
    style="inset-inline-end: 24px"
  >
    <template #icon>
      <CustomerServiceOutlined />
    </template>
    <a-float-button />
    <a-float-button>
      <template #icon>
        <CommentOutlined />
      </template>
    </a-float-button>
  </a-float-button-group>

  <a-float-button-group
    trigger="hover"
    type="primary"
    style="inset-inline-end: 94px"
  >
    <template #icon>
      <CustomerServiceOutlined />
    </template>
    <a-float-button />
    <a-float-button>
      <template #icon>
        <CommentOutlined />
      </template>
    </a-float-button>
  </a-float-button-group>
</template>

<style scoped>

</style>
```
