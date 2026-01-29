# 自定义关闭按钮

## Description (zh-CN)

可用 `closeIcon` 自定义关闭按钮。

## Source

```vue
<script setup lang="ts">
import { CloseCircleOutlined } from '@antdv-next/icons'
</script>

<template>
  <a-flex gap="small" align="center" wrap>
    <a-tag closable close-icon="关闭">
      Tag 1
    </a-tag>
    <a-tag closable>
      Tag 2
      <template #closeIcon>
        <CloseCircleOutlined />
      </template>
    </a-tag>
  </a-flex>
</template>
```
