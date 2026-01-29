# 范围选择器

## Description (zh-CN)

通过设置 `picker` 属性，指定范围选择器类型。

## Source

```vue
<script lang="ts" setup>
import { shallowRef } from 'vue'

const date = shallowRef()
const week = shallowRef()
const month = shallowRef()
const quarter = shallowRef()
const year = shallowRef()
</script>

<template>
  <a-space vertical :size="12">
    <a-range-picker v-model:value="date" />
    <a-range-picker v-model:value="date" show-time />
    <a-range-picker v-model:value="week" picker="week" />
    <a-range-picker v-model:value="month" picker="month" />
    <a-range-picker v-model:value="quarter" picker="quarter" />
    <a-range-picker
      :id="{ start: 'startInput', end: 'endInput' }"
      v-model:value="year"
      picker="year"
      @focus="(_, info) => {
        console.log('Focus:', info.range)
      }"
      @blur="(_, info) => {
        console.log('Blur:', info.range)
      }"
    />
  </a-space>
</template>
```
