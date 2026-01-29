# 自动大小

## Description (zh-CN)

自适应内容高度。

## Source

```vue
<script setup lang="ts">
import type { MentionsProps } from 'antdv-next'

const options: MentionsProps['options'] = [
  {
    value: 'afc163',
    label: 'afc163',
  },
  {
    value: 'zombieJ',
    label: 'zombieJ',
  },
  {
    value: 'yesmeck',
    label: 'yesmeck',
  },
]
</script>

<template>
  <a-mentions auto-size style="width: 100%" :options="options" />
</template>
```
