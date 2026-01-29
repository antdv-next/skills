# 带搜索框

## Description (zh-CN)

展开后可搜索选项。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const value = shallowRef<string>()

const options = [
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'tom', label: 'Tom' },
]

function onChange(val: string) {
  console.log(`selected ${val}`)
}

function onSearch(val: string) {
  console.log('search:', val)
}
</script>

<template>
  <a-select
    v-model:value="value"
    show-search
    option-filter-prop="label"
    placeholder="Select a person"
    :options="options"
    @change="onChange"
    @search="onSearch"
  />
</template>
```
