# 省略中间

## Description (zh-CN)

使用 `ellipsis={{ suffix: ... }}` 可以封装一个从中间省略内容的组件，适合于需要保留文本末位特征的内容。

## Source

```vue
<script setup lang="ts">
import { computed } from 'vue'

const suffixCount = 12
const children = 'In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.'

const start = computed(() => children.slice(0, children.length - suffixCount))
const suffix = computed(() => children.slice(-suffixCount).trim())
</script>

<template>
  <a-typography-text style="max-width: 100%;" :ellipsis="{ suffix }">
    {{ start }}
  </a-typography-text>
</template>
```
