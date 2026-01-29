# 大数据

## Description (zh-CN)

Select 使用[虚拟滚动](https://github.com/react-component/virtual-list)以获得更好的性能，设置 `:virtual="false"` 可关闭。

## Source

```vue
<script setup lang="ts">
import type { SelectProps } from 'antdv-next'
import { shallowRef } from 'vue'

const options: SelectProps['options'] = []
for (let i = 0; i < 100000; i++) {
  const value = `${i.toString(36)}${i}`
  options.push({
    label: value,
    value,
    disabled: i === 10,
  })
}
const value = shallowRef(['a10', 'c12'])
</script>

<template>
  <a-typography-title :level="4">
    {{ options?.length }} Items
  </a-typography-title>
  <a-select v-model:value="value" mode="multiple" style="width: 100%" placeholder="Please select" :options="options" />
</template>

<style scoped>

</style>
```
