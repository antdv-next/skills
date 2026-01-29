# 搜索

## Description (zh-CN)

可以直接搜索选项并选择。

> `Cascader[showSearch]` 暂不支持服务端搜索，更多信息见 [#5547](https://github.com/ant-design/ant-design/issues/5547)

## Source

```vue
<script setup lang="ts">
import type { CascaderEmits } from 'antdv-next'

interface Option {
  value: string
  label: string
  children?: Option[]
  disabled?: boolean
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
          {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
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
            label: 'Zhong Hua men',
          },
        ],
      },
    ],
  },
]

const onChange: CascaderEmits['change'] = (value, selectedOptions) => {
  console.log(value, selectedOptions)
}

function handleSearch(value: string) {
  console.log(value)
}

function filter(inputValue: string, path: Option[]) {
  return path.some(option => option.label.toLowerCase().includes(inputValue.toLowerCase()))
}
</script>

<template>
  <a-cascader
    :options="options"
    :show-search="{ filter, onSearch: handleSearch } as any"
    placeholder="Please select"
    @change="onChange"
  />
</template>
```
