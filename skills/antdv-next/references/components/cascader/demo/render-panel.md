# render-panel

## Source

```vue
<script setup lang="ts">
import { Cascader } from 'antdv-next'

interface Option {
  value: string | number
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
const InternalCascader = Cascader._InternalPanelDoNotUseOrYouWillBeFired
</script>

<template>
  <InternalCascader :options="options" placeholder="Please select" />
</template>
```
