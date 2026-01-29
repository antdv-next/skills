# 固定表头

## Description (zh-CN)

方便一页内展示大量数据。

需要指定 column 的 `width` 属性，否则列头和内容可能不对齐。如果指定 `width` 不生效或出现白色垂直空隙，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有[超长连续字段破坏布局](https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241)。

## Source

```vue
<script setup lang="ts">
import type { TableProps } from 'antdv-next'

interface DataType {
  key: number
  name: string
  age: number
  address: string
}

const columns: TableProps['columns'] = [
  { title: 'Name', dataIndex: 'name', key: 'name', width: 150 },
  { title: 'Age', dataIndex: 'age', key: 'age', width: 100 },
  { title: 'Address', dataIndex: 'address', key: 'address' },
]

const dataSource: DataType[] = Array.from({ length: 100 }).map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}))
</script>

<template>
  <a-table
    :columns="columns"
    :data-source="dataSource"
    :pagination="{ pageSize: 50 }"
    :scroll="{ y: 275 }"
  />
</template>
```
