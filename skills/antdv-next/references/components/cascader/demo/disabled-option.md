# 禁用选项

## Description (zh-CN)

通过指定 options 里的 `disabled` 字段。

## Source

```vue
<script setup lang="ts">
import type { CascaderEmits } from 'antdv-next'

interface Option {
  value: string
  label: string
  disabled?: boolean
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
    disabled: true,
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
  <a-cascader :options="options" @change="onChange" />
</template>
```
