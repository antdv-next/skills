# 三种大小

## Description (zh-CN)

三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

function onChange(value: number | null) {
  console.log('changed', value)
}

const value1 = ref(3)
const value2 = ref(3)
const value3 = ref(3)
</script>

<template>
  <a-space wrap>
    <a-input-number v-model:value="value1" size="large" :min="1" :max="100000" @change="onChange" />
    <a-input-number v-model:value="value2" :min="1" :max="100000" @change="onChange" />
    <a-input-number v-model:value="value3" size="small" :min="1" :max="100000" @change="onChange" />
  </a-space>
</template>
```
