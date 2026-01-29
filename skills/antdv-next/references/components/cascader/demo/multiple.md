# 多选

## Description (zh-CN)

一次性选择多个选项。通过添加 `disableCheckbox` 属性,选择具体某一个`checkbox`禁用 。可以通过类名修改禁用的样式。

## Source

```vue
<script setup lang="ts">
import type { CascaderEmits } from 'antdv-next'

interface Option {
  value: string | number
  label: string
  children?: Option[]
  disableCheckbox?: boolean
}

const options: Option[] = [
  {
    label: 'Light',
    value: 'light',
    children: Array.from({ length: 20 }).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
            disableCheckbox: true,
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
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
  <a-cascader
    style="width: 100%"
    :options="options"
    multiple
    max-tag-count="responsive"
    @change="onChange"
  />
</template>
```
