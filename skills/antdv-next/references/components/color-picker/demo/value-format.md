# 值格式化

## Description (zh-CN)

通过 `valueFormat` 指定颜色值的输出类型，支持 `hex`、`rgb` 和 `hsb`。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const hexValue = shallowRef('#1677ff')
const rgbValue = shallowRef('rgb(22, 119, 255)')
const hsbValue = shallowRef('hsb(215, 91%, 100%)')
</script>

<template>
  <a-space wrap size="large">
    <a-space direction="vertical" :size="8">
      <span>HEX String</span>
      <a-color-picker v-model:value="hexValue" value-format="hex" />
      <span>value: {{ hexValue }}</span>
    </a-space>

    <a-space direction="vertical" :size="8">
      <span>RGB String</span>
      <a-color-picker v-model:value="rgbValue" value-format="rgb" />
      <span>value: {{ rgbValue }}</span>
    </a-space>

    <a-space direction="vertical" :size="8">
      <span>HSB String</span>
      <a-color-picker v-model:value="hsbValue" value-format="hsb" />
      <span>value: {{ hsbValue }}</span>
    </a-space>
  </a-space>
</template>
```
