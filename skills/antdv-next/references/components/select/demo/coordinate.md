# 联动

## Description (zh-CN)

省市联动是典型的例子，展示了如何协调选择。推荐使用 [Cascader](../../cascader/docs.md) 组件。

## Source

```vue
<script setup lang="ts">
import { computed, shallowRef } from 'vue'

const cityData: Record<string, string[]> = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
}

const provinceData: string[] = ['Zhejiang', 'Jiangsu']

const province = shallowRef(provinceData[0]!)
const secondCity = shallowRef(cityData[provinceData[0]!]![0])

const cities = computed(() => cityData[province.value] ?? [])

function handleProvinceChange(value: string) {
  province.value = value
  secondCity.value = cityData[value]?.[0] ?? ''
}
</script>

<template>
  <a-space wrap>
    <a-select
      v-model:value="province"
      style="width: 120px"
      :options="provinceData.map((p) => ({ label: p, value: p }))"
      @change="handleProvinceChange"
    />
    <a-select
      v-model:value="secondCity"
      style="width: 120px"
      :options="cities.map((c) => ({ label: c, value: c }))"
    />
  </a-space>
</template>
```
