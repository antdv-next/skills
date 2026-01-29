# 自定义提示

## Description (zh-CN)

使用 `tooltip.formatter` 可以格式化 `Tooltip` 的内容，设置 `tooltip.formatter={null}`，则隐藏 `Tooltip`。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(30)
const value2 = ref(30)

function formatter(value: number) {
  return `${value}%`
}
</script>

<template>
  <a-slider v-model:value="value" :tooltip="{ formatter }" />
  <a-slider v-model:value="value2" :tooltip="{ formatter: null }" />
</template>
```
