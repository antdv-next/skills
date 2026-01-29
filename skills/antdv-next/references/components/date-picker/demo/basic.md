# 基本

## Description (zh-CN)

最简单的用法，在浮层中可以选择或者输入日期。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const date = shallowRef()
const week = shallowRef()
const month = shallowRef()
const year = shallowRef()
const quarter = shallowRef()
</script>

<template>
  <a-space vertical>
    <a-date-picker v-model:value="date" />
    <a-date-picker v-model:value="week" picker="week" />
    <a-date-picker v-model:value="month" picker="month" />
    <a-date-picker v-model:value="quarter" picker="quarter" />
    <a-date-picker v-model:value="year" picker="year" />
  </a-space>
</template>
```
