# 默认值

## Description (zh-CN)

默认值通过数组的方式指定。

## Source

```vue
<script setup lang="ts">
import type { CascaderEmits } from 'antdv-next'

interface Option {
  value: string
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
]

const onChange: CascaderEmits['change'] = (value) => {
  console.log(value)
}
</script>

<template>
  <a-cascader :default-value="['zhejiang', 'hangzhou', 'xihu']" :options="options" @change="onChange" />
</template>
```
