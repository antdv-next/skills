# 移入展开

## Description (zh-CN)

通过移入展开下级菜单，点击完成选择。

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

const displayRender = (labels: string[]) => labels[labels.length - 1]
</script>

<template>
  <a-cascader
    :options="options"
    expand-trigger="hover"
    :display-render="displayRender"
    @change="onChange"
  />
</template>
```
