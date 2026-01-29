# 重置筛选

## Description (zh-CN)

使用受控属性对筛选和排序状态进行控制。

> 1. columns 中定义了 filteredValue 和 sortOrder 属性即视为受控模式。
> 2. 只支持同时对一列进行排序，请保证只有一列的 sortOrder 属性是生效的。
> 3. 务必指定 `column.key`。

## Source

```vue
<script setup lang="ts">
import type { TableEmits, TableProps } from 'antdv-next'
import { computed, ref } from 'vue'

type OnChange = NonNullable<TableEmits['change']>
type Filters = Parameters<OnChange>[1]
type Sorter = Parameters<OnChange>[2]
type Sorts = Sorter extends any[] ? Sorter[number] : Sorter

interface DataType {
  key: string
  name: string
  age: number
  address: string
}

const dataSource: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
]

const filteredInfo = ref<Filters>({})
const sortedInfo = ref<Record<string, any>>({})

const columns = computed<TableProps['columns']>(() => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    filters: [
      { text: 'Joe', value: 'Joe' },
      { text: 'Jim', value: 'Jim' },
    ],
    filteredValue: filteredInfo.value?.name || null,
    onFilter: (value, record) => record.name.includes(String(value)),
    sorter: (a, b) => a.name.length - b.name.length,
    sortOrder: sortedInfo.value.columnKey === 'name' ? sortedInfo.value.order : null,
    ellipsis: true,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
    sortOrder: sortedInfo.value.columnKey === 'age' ? sortedInfo.value.order : null,
    ellipsis: true,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    filters: [
      { text: 'London', value: 'London' },
      { text: 'New York', value: 'New York' },
    ],
    filteredValue: filteredInfo.value?.address || null,
    onFilter: (value, record) => record.address.includes(String(value)),
    sorter: (a, b) => a.address.length - b.address.length,
    sortOrder: sortedInfo.value.columnKey === 'address' ? sortedInfo.value.order : null,
    ellipsis: true,
  },
])

const handleChange: OnChange = (pagination, filters, sorter) => {
  console.log('Various parameters', pagination, filters, sorter)
  filteredInfo.value = filters
  sortedInfo.value = Array.isArray(sorter) ? ((sorter[0] || {}) as Sorts) : (sorter as Sorts)
}

function clearFilters() {
  filteredInfo.value = {}
}

function clearAll() {
  filteredInfo.value = {}
  sortedInfo.value = {} as Sorts
}

function setAgeSort() {
  sortedInfo.value = {
    order: 'descend',
    columnKey: 'age',
  } as Sorts
}
</script>

<template>
  <a-space style="margin-bottom: 16px">
    <a-button @click="setAgeSort">
      Sort age
    </a-button>
    <a-button @click="clearFilters">
      Clear filters
    </a-button>
    <a-button @click="clearAll">
      Clear filters and sorters
    </a-button>
  </a-space>
  <a-table :columns="columns" :data-source="dataSource" @change="handleChange" />
</template>
```
