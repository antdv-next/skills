# 固定列与表头

## Description (zh-CN)

适合同时展示有大量数据和数据列。

> 若列头与内容不对齐或出现列重复，请指定**固定列**的宽度 `width`。如果指定 `width` 不生效或出现白色垂直空隙，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有[超长连续字段破坏布局](https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241)。
>
> 建议指定 `scroll.x` 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 `scroll.x`。

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
  { title: 'Full Name', dataIndex: 'name', key: 'name', width: 100, fixed: 'start' },
  { title: 'Age', dataIndex: 'age', key: 'age', width: 100, fixed: 'start' },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  { title: 'Column 9', dataIndex: 'address', key: '9' },
  { title: 'Column 10', dataIndex: 'address', key: '10' },
  { title: 'Column 11', dataIndex: 'address', key: '11' },
  { title: 'Column 12', dataIndex: 'address', key: '12' },
  { title: 'Column 13', dataIndex: 'address', key: '13' },
  { title: 'Column 14', dataIndex: 'address', key: '14' },
  { title: 'Column 15', dataIndex: 'address', key: '15' },
  { title: 'Column 16', dataIndex: 'address', key: '16' },
  { title: 'Column 17', dataIndex: 'address', key: '17' },
  { title: 'Column 18', dataIndex: 'address', key: '18' },
  { title: 'Column 19', dataIndex: 'address', key: '19' },
  { title: 'Column 20', dataIndex: 'address', key: '20' },
  { title: 'Action', key: 'operation', fixed: 'end', width: 100 },
]

const dataSource = Array.from({ length: 100 }).map<DataType>((_, i) => ({
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
    :scroll="{ x: 'max-content', y: 275 }"
  >
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a>action</a>
      </template>
    </template>
  </a-table>
</template>
```
