# controls

## Description (zh-CN)

可以扩展 `controls` 属性用以设置自定义图标。

## Source

```vue
<script setup lang="ts">
import { ArrowDownOutlined, ArrowUpOutlined } from '@antdv-next/icons'
</script>

<template>
  <a-input-number>
    <template #upIcon>
      <ArrowUpOutlined />
    </template>
    <template #downIcon>
      <ArrowDownOutlined />
    </template>
  </a-input-number>
</template>
```
