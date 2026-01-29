# 单选组合 - 配合 name 使用

## Description (zh-CN)

可以为 Radio.Group 配置 `name` 参数，为组合内的 input 元素赋予相同的 `name` 属性，使浏览器把 Radio.Group 下的 Radio 真正看作是一组（例如可以通过方向键始终**在同一组内**更改选项）。

## Source

```vue
<script setup lang="ts">
import type { CheckboxOptionType } from 'antdv-next'
import { shallowRef } from 'vue'

const options: CheckboxOptionType[] = [
  { label: 'A', value: 1 },
  { label: 'B', value: 2 },
  { label: 'C', value: 3 },
  { label: 'D', value: 4 },
]
const val = shallowRef(1)
</script>

<template>
  <a-radio-group v-model:value="val" name="radiogroup" :options="options" />
</template>
```
