# 带图标的步骤条

## Description (zh-CN)

通过设置 `items` 的 `icon` 属性，可以启用自定义图标。

## Source

```vue
<script setup lang="ts">
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@antdv-next/icons'
import { h } from 'vue'

const items = [
  {
    title: 'Login',
    status: 'finish' as const,
    icon: h(UserOutlined),
  },
  {
    title: 'Verification',
    status: 'finish' as const,
    icon: h(SolutionOutlined),
  },
  {
    title: 'Pay',
    status: 'process' as const,
    icon: h(LoadingOutlined),
  },
  {
    title: 'Done',
    status: 'wait' as const,
    icon: h(SmileOutlined),
  },
]
</script>

<template>
  <a-steps :items="items" />
</template>
```
