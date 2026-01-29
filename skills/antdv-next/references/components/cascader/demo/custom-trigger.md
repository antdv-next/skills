# 可以自定义显示

## Description (zh-CN)

切换按钮和结果分开。

## Source

```vue
<script setup lang="ts">
import type { CascaderEmits } from 'antdv-next'
import { ref } from 'vue'

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
      },
    ],
  },
]

const text = ref('Unselect')

const onChange: CascaderEmits['change'] = (_value, selectedOptions) => {
  const labels = selectedOptions?.map(option => option.label).join(', ')
  text.value = labels || 'Unselect'
}
</script>

<template>
  <span>
    {{ text }}&nbsp;
    <a-cascader :options="options" @change="onChange">
      <a>Change city</a>
    </a-cascader>
  </span>
</template>
```
