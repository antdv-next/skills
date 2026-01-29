# 标签

## Description (zh-CN)

用户可以从列表中选择标签或者输入自定义标签。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const options = Array.from({ length: 26 }, (_, i) => {
  const value = (i + 10).toString(36) + (i + 10)
  return { value, label: value }
})

const value = shallowRef<string[]>([])

function handleChange(val: string[]) {
  console.log(`selected ${val}`)
}
</script>

<template>
  <a-select
    v-model:value="value"
    mode="tags"
    style="width: 100%"
    placeholder="Tags Mode"
    :options="options"
    @change="handleChange"
  />
</template>
```
