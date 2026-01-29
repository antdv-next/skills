# 自定义触发字符

## Description (zh-CN)

通过 `prefix` 属性自定义触发字符。默认为 `@`, 可以定义为数组。

## Source

```vue
<script setup lang="ts">
import type { MentionsEmits } from 'antdv-next'
import { computed, ref } from 'vue'

const mockData = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
}

type PrefixType = keyof typeof mockData

const prefix = ref<PrefixType>('@')

const handleSearch: MentionsEmits['search'] = (_text, newPrefix) => {
  prefix.value = (newPrefix as PrefixType) || '@'
}

const options = computed(() => {
  const data = mockData[prefix.value] || []
  return data.map(value => ({
    key: value,
    value,
    label: value,
  }))
})
</script>

<template>
  <a-mentions
    style="width: 100%"
    placeholder="input @ to mention people, # to mention tag"
    :prefix="['@', '#']"
    :options="options"
    @search="handleSearch"
  />
</template>
```
