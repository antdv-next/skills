# 基本

## Description (zh-CN)

省市区级联。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

type Option = {
  value: string
  label: string
  children?: Option[]
} & Record<string, any>
const options: Option[] = [
  {
    'value': 'zhejiang',
    'label': 'Zhejiang',
    'aria-label': 'Zhejiang',
    'data-title': 'Zhejiang',
    'children': [
      {
        'value': 'hangzhou',
        'label': 'Hangzhou',
        'aria-label': 'Hangzhou',
        'data-title': 'Hangzhou',
        'children': [
          {
            'value': 'xihu',
            'label': 'West Lake',
            'aria-label': 'West Lake',
            'data-title': 'West Lake',
          },
        ],
      },
    ],
  },
  {
    'value': 'jiangsu',
    'label': 'Jiangsu',
    'aria-label': 'Jiangsu',
    'data-title': 'Jiangsu',
    'children': [
      {
        'value': 'nanjing',
        'label': 'Nanjing',
        'aria-label': 'Nanjing',
        'data-title': 'Nanjing',
        'children': [
          {
            'value': 'zhonghuamen',
            'label': 'Zhong Hua Men',
            'aria-label': 'Zhong Hua Men',
            'data-title': 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
]

const val = ref()
</script>

<template>
  <a-cascader v-model:value="val" :options="options" placeholder="Please select" />
</template>
```
