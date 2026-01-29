# 清除颜色

## Description (zh-CN)

清除已选择的颜色。

## Source

```vue
<script setup lang="ts">
import type { ColorValueType } from 'antdv-next'
import { shallowRef } from 'vue'

const color = shallowRef<ColorValueType>('#1677ff')
</script>

<template>
  <a-color-picker v-model:value="color" allow-clear />
</template>
```
