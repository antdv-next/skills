# useBreakpoint Hook

## Description (zh-CN)

使用 `useBreakpoint` Hook 实现个性化布局，其中 `xs` 仅当满足最小宽度时生效。

## Source

```vue
<script setup lang="ts">
import { useBreakpoint } from 'antdv-next'
import { computed } from 'vue'

const screens = useBreakpoint()
const screenKeys = computed(() => Object.entries(screens.value ?? {}).filter(screen => !!screen[1]))
</script>

<template>
  Current break point:
  <div class="gap-2 inline-flex">
    <template v-for="item in screenKeys" :key="item[0]">
      <a-tag color="blue">
        {{ item[0] }}
      </a-tag>
    </template>
  </div>
</template>
```
