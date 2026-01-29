# 自动分词

## Description (zh-CN)

尝试复制 `Lucy,Jack` 并粘贴到输入框中。仅在 tags 和 multiple 模式下可用。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = Array.from({ length: 26 }, (_, i) => {
  const value = (i + 10).toString(36) + (i + 10)
  return { value, label: value }
})

function handleChange(value: string[]) {
  console.log(`selected ${value}`)
}
const value = ref()
</script>

<template>
  <a-select
    v-model:value="value"
    mode="tags"
    style="width: 100%"
    :token-separators="[',']"
    :options="options"
    @change="handleChange"
  />
</template>
```
