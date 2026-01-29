# 禁用透明度

## Description (zh-CN)

禁用颜色透明度。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const color = shallowRef('#1677ff')
</script>

<template>
  <a-color-picker v-model:value="color" disabled-alpha />
</template>
```
