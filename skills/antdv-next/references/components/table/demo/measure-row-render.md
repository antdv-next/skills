# measure-row-render

## Description (zh-CN)

用 `measureRowRender` 修复 https://github.com/ant-design/ant-design/issues/54906 。

## Source

```vue
<script setup lang="ts">
import type { TableProps } from 'antdv-next'
import { FilterFilled, SearchOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

interface DataType {
  key: string
  name: string
  age: number
  address: string
}

type DataIndex = keyof DataType

interface FilterColumn {
  dataIndex?: DataIndex | DataIndex[]
  filters?: Array<{ text: string, value: string | number }>
  filterMultiple?: boolean
}

const dataSource: DataType[] = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
  { key: '2', name: 'Joe Black', age: 42, address: 'London No. 1 Lake Park' },
  { key: '3', name: 'Jim Green', age: 32, address: 'Sydney No. 1 Lake Park' },
  { key: '4', name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
]

const searchText = ref('')
const searchedColumn = ref<DataIndex | ''>('')
const searchInput = ref<any>(null)

const searchColumnKeys: DataIndex[] = ['name']

function getDataIndex(column: FilterColumn): DataIndex | null {
  const dataIndex = column?.dataIndex
  if (typeof dataIndex === 'string') {
    return dataIndex
  }
  return null
}

function isSearchColumn(column: FilterColumn) {
  const dataIndex = getDataIndex(column)
  return dataIndex ? searchColumnKeys.includes(dataIndex) : false
}

function handleSearch(selectedKeys: string[], confirm: any, dataIndex: DataIndex) {
  confirm()
  searchText.value = selectedKeys[0] || ''
  searchedColumn.value = dataIndex
}

function handleFilter(selectedKeys: string[], confirm: any, dataIndex: DataIndex) {
  confirm({ closeDropdown: false })
  searchText.value = selectedKeys[0] || ''
  searchedColumn.value = dataIndex
}

function handleReset(clearFilters?: () => void) {
  clearFilters?.()
  searchText.value = ''
}

function getHighlightParts(text: string, keyword: string) {
  if (!keyword) {
    return [{ text, highlight: false }]
  }
  const lowerText = text.toLowerCase()
  const lowerKey = keyword.toLowerCase()
  const index = lowerText.indexOf(lowerKey)
  if (index === -1) {
    return [{ text, highlight: false }]
  }
  return [
    { text: text.slice(0, index), highlight: false },
    { text: text.slice(index, index + keyword.length), highlight: true },
    { text: text.slice(index + keyword.length), highlight: false },
  ].filter(part => part.text)
}

const columns: TableProps['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '30%',
    filters: [],
    onFilter: (value, record) =>
      record.name.toLowerCase().includes(String(value).toLowerCase()),
    filterDropdownProps: {
      open: true,
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '20%',
    filters: [
      { text: 'Joe', value: 'Joe' },
      { text: 'Category 1', value: 'Category 1' },
      { text: 'Category 2', value: 'Category 2' },
    ],
    filterDropdownProps: {
      open: true,
    },
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    filters: [],
    onFilter: (value, record) =>
      record.address.toLowerCase().includes(String(value).toLowerCase()),
    filterDropdownProps: {
      onOpenChange(open) {
        if (open) {
          setTimeout(() => searchInput.value?.select?.(), 100)
        }
      },
    },
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
    showSorterTooltip: {
      open: true,
    },
  },
]
</script>

<template>
  <a-table sticky :columns="columns" :data-source="dataSource">
    <template #filterIcon="{ column, filtered }">
      <SearchOutlined
        v-if="isSearchColumn(column as any)"
        :style="{ color: filtered ? '#1677ff' : undefined }"
      />
      <FilterFilled v-else />
    </template>
    <template #filterDropdown="{ column, setSelectedKeys, selectedKeys, confirm, clearFilters, close }">
      <template v-if=" isSearchColumn(column as any)">
        <div class="p-8px" @keydown.stop>
          <a-input
            ref="searchInput"
            class="mb-8px block"
            :placeholder="`Search ${getDataIndex(column as any)}`"
            :value="String(selectedKeys[0] || '')"
            @update:value="value => setSelectedKeys(value ? [String(value)] : [])"
            @keydown.enter="handleSearch(selectedKeys as string[], confirm, getDataIndex(column as any)!)"
          />
          <a-space>
            <a-button
              type="primary"
              size="small"
              style="width: 90px"
              @click="handleSearch(selectedKeys as string[], confirm, getDataIndex(column as any)!)"
            >
              <template #icon>
                <SearchOutlined />
              </template>
              Search
            </a-button>
            <a-button
              size="small"
              style="width: 90px"
              @click="handleReset(clearFilters)"
            >
              Reset
            </a-button>
            <a-button
              type="link"
              size="small"
              @click="handleFilter(selectedKeys as string[], confirm, getDataIndex(column as any)!)"
            >
              Filter
            </a-button>
            <a-button
              type="link"
              size="small"
              @click="close?.()"
            >
              close
            </a-button>
          </a-space>
        </div>
      </template>
    </template>
    <template #bodyCell="{ column, text }">
      <template v-if="isSearchColumn(column as any) && searchedColumn === (column as any).dataIndex">
        <template v-for="(part, index) in getHighlightParts(String(text ?? ''), searchText)" :key="index">
          <mark v-if="part.highlight" class="table-highlight">{{ part.text }}</mark>
          <span v-else>{{ part.text }}</span>
        </template>
      </template>
    </template>
  </a-table>
</template>

<style scoped>
.table-highlight {
  background: #ffc069;
  padding: 0;
}
</style>
```
