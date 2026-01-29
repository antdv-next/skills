# 事件

## Description (zh-CN)

当 Slider 的值发生改变时，会触发 `onChange` 事件，并把改变后的值作为参数传入。在 `mouseup` 或者 `keyup` 时，会触发 `onChangeComplete` 事件，并把当前值作为参数传入。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(30)
const valueRange = ref([20, 50])

function onChange(val: number | number[]) {
  console.log('onChange: ', val)
}

function onChangeComplete(val: number | number[]) {
  console.log('onChangeComplete: ', val)
}
</script>

<template>
  <a-slider v-model:value="value" @change="onChange" @after-change="onChangeComplete" />
  <a-slider
    v-model:value="valueRange"
    range
    :step="10"
    @change="onChange"
    @after-change="onChangeComplete"
  />
</template>
```
