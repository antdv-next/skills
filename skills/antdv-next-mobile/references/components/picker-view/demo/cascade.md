# Cascading

When `columns` is a function, the column data is recomputed with the latest value after every selection, and the values of the following columns are corrected to selectable options automatically, which enables cascading.

## Source

```vue
<script setup lang="ts">
import type { PickerValue } from '@antdv-next/mobile'
import { ref } from 'vue'

const data: Record<string, Record<string, string[]>> = {
  Zhejiang: { Hangzhou: ['Xihu', 'Yuhang', 'Binjiang'], Ningbo: ['Haishu', 'Yinzhou'] },
  Jiangsu: { Nanjing: ['Xuanwu', 'Gulou', 'Jianye'], Suzhou: ['Gusu', 'Wuzhong', 'Wujiang'] },
  Fujian: { Fuzhou: ['Gulou', 'Taijiang'], Xiamen: ['Siming', 'Huli', 'Jimei'] },
}
const toOptions = (list: string[]) => list.map(item => ({ label: item, value: item }))

function columns(value: PickerValue[]) {
  const province = data[value[0]] ? String(value[0]) : Object.keys(data)[0]
  const cities = data[province]
  const city = cities[value[1]] ? String(value[1]) : Object.keys(cities)[0]
  return [toOptions(Object.keys(data)), toOptions(Object.keys(cities)), toOptions(cities[city])]
}

const value = ref<PickerValue[]>(['Jiangsu', 'Suzhou', 'Wujiang'])
</script>

<template>
  <am-picker-view v-model:value="value" :columns="columns" />
  <div class="demo-result">
    {{ value.join(' / ') }}
  </div>
</template>

<style scoped>
.demo-result {
  margin-top: 12px;
  color: var(--am-color-text-secondary);
  font-size: 14px;
  text-align: center;
}
</style>
```
