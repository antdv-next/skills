# 向上展开

## Description (zh-CN)

向上展开建议。

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
  <a-mentions style="width: 100%" placement="top" :options="options" />
</template>
```
