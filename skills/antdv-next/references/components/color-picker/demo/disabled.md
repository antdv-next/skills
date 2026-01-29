# 禁用

## Description (zh-CN)

设置为禁用状态。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const color = shallowRef('#1677ff')
</script>

<template>
  <a-color-picker v-model:value="color" show-text disabled />
</template>
```
