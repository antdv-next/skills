# Basic usage

An avatar has two shapes, circle and square, set with `shape`.

## Source

```vue
<script setup lang="ts">
import { UserOutlined } from '@antdv-next/icons'
</script>

<template>
  <am-space size="middle">
    <am-avatar>
      <template #icon>
        <UserOutlined />
      </template>
    </am-avatar>
    <am-avatar shape="square">
      <template #icon>
        <UserOutlined />
      </template>
    </am-avatar>
  </am-space>
</template>
```
