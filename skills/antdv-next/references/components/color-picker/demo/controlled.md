# 受控模式

## Description (zh-CN)

通过 `value` 和 `onChange` 设置组件为受控模式，如果通过 `onChangeComplete` 受控则会锁定展示颜色。

## Source

```vue
<script setup lang="ts">
import type { Color, ColorValueType } from 'antdv-next'
import { shallowRef } from 'vue'

const color = shallowRef<ColorValueType>('#1677ff')

function handleChangeComplete(value: Color) {
  color.value = value
}
</script>

<template>
  <a-space>
    <a-color-picker v-model:value="color" />
    <a-color-picker :value="color" @change-complete="handleChangeComplete" />
  </a-space>
</template>
```
