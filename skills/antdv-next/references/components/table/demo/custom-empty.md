# 自定义空状态

## Description (zh-CN)

自定义空状态。

## Source

```vue
<script setup lang="ts">
import type { TableProps } from 'antdv-next'

const columns: TableProps['columns'] = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
]
</script>

<template>
  <a-table :columns="columns" :data-source="[]">
    <template #emptyText>
      <div class="table-empty color-text-tertiary px-8px py-0">
        No data yet
      </div>
    </template>
  </a-table>
</template>
```
