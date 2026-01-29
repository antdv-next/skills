# tree-table-preserveSelectedRowKeys

## Description (zh-CN)

treeData Table 使用 CheckStrictly: false & preserveSelectedRowKeys: true 的示例

https://github.com/ant-design/ant-design/issues/50621

## Source

```vue
<script setup lang="ts">
import type { TableProps } from 'antdv-next'
import { computed, ref } from 'vue'

interface DataType {
  key: string
  name: string
  age: number
  address: string
  children?: DataType[]
}

const columns: TableProps['columns'] = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age', width: '12%' },
  { title: 'Address', dataIndex: 'address', key: 'address', width: '30%' },
]

const dataSource = Array.from({ length: 15 }).map<DataType>((_, i) => ({
  key: `key${i}`,
  name: `Edward ${i}`,
  age: 32,
  address: `London Park no. ${i}`,
  children: [
    {
      key: `subKey${i}1`,
      name: 'Brown',
      age: 16,
      address: 'New York No. 3 Lake Park',
    },
    {
      key: `subKey${i}2`,
      name: 'Jimmy',
      age: 16,
      address: 'New York No. 3 Lake Park',
    },
  ],
}))

const checkStrictly = ref(false)
const preserveSelectedRowKeys = ref(true)

const rowSelection = computed<TableProps['rowSelection']>(() => ({
  checkStrictly: checkStrictly.value,
  preserveSelectedRowKeys: preserveSelectedRowKeys.value,
  onChange: (selectedRowKeys, selectedRows, info) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows,
      'info',
      info,
    )
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows)
  },
}))
</script>

<template>
  <a-space align="center" style="margin-bottom: 16px">
    CheckStrictly:
    <a-switch v-model:checked="checkStrictly" />
    preserveSelectedRowKeys:
    <a-switch v-model:checked="preserveSelectedRowKeys" />
  </a-space>
  <a-table
    :columns="columns"
    :data-source="dataSource"
    :row-selection="rowSelection"
    :pagination="{ defaultPageSize: 5 }"
  />
</template>
```
