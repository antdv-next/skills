# 讨嫌的小红点

## Description (zh-CN)

没有具体的数字。

## Source

```vue
<script setup lang="ts">
import { NotificationOutlined } from '@antdv-next/icons'
</script>

<template>
  <a-space>
    <a-badge dot>
      <NotificationOutlined style="font-size: 16px" />
    </a-badge>
    <a-badge dot>
      <a href="#">Link something</a>
    </a-badge>
  </a-space>
</template>
```
