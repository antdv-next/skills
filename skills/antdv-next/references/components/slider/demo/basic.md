# 基本

## Description (zh-CN)

基本滑动条。当 `range` 为 `true` 时，渲染为双滑块。当 `disabled` 为 `true` 时，滑块处于不可用状态。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const disabled = ref(false)
const value = ref(30)
const valueRange = ref([20, 50])
</script>

<template>
  <a-slider v-model:value="value" :disabled="disabled" />
  <a-slider v-model:value="valueRange" range :disabled="disabled" />
  Disabled: <a-switch v-model:checked="disabled" size="small" />
</template>
```
