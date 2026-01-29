# 自定义选中 label

## Description (zh-CN)

允许自定义当前选中标签的渲染，可用于值回填但相应选项缺失，不想直接渲染值的情况。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const options = [
  { label: 'gold', value: 'gold' },
  { label: 'lime', value: 'lime' },
  { label: 'green', value: 'green' },
  { label: 'cyan', value: 'cyan' },
]

const value = shallowRef('1')
</script>

<template>
  <a-select
    v-model:value="value"
    style="width: 100%"
    :options="options"
  >
    <template #labelRender="{ label, value: val }">
      <template v-if="label">
        {{ val }}
      </template>
      <span v-else>No option match</span>
    </template>
  </a-select>
</template>
```
