# 整行编辑

## Description (zh-CN)

带行编辑功能的表格。

> 所有可编辑表格不能采用`v-model:value="record.xxx"`的形式来双向绑定数据，否则会导致数据异常。
> 所有的数据都建议采用表单的形式来进行数据的收集和校验。

## Source

```vue
<script setup lang="ts">
import type { FormInstance, TableProps } from 'antdv-next'
import { ref } from 'vue'

interface DataType {
  key: string
  name: string
  age: number
  address: string
}

const originData = Array.from({ length: 100 }).map<DataType>((_, i) => ({
  key: i.toString(),
  name: `Edward ${i}`,
  age: 32,
  address: `London Park no. ${i}`,
}))

const dataSource = ref<DataType[]>(originData)
const formRef = ref<FormInstance | null>(null)
const formModel = ref<Record<string, any>>({ name: '', age: 0, address: '' })
const editingKey = ref('')

const editableColumns = new Set(['name', 'age', 'address'])
const columns: TableProps['columns'] = [
  { title: 'Name', dataIndex: 'name', key: 'name', width: '25%' },
  { title: 'Age', dataIndex: 'age', key: 'age', width: '15%' },
  { title: 'Address', dataIndex: 'address', key: 'address', width: '40%' },
  { title: 'Operation', key: 'operation' },
]

const isEditing = (record: Record<string, any>) => record.key === editingKey.value

function edit(record: Record<string, any>) {
  formModel.value = { name: record.name, age: record.age, address: record.address }
  editingKey.value = record.key
}

async function save(key: string) {
  try {
    const values = await formRef.value?.validateFields()
    if (!values) {
      return
    }
    const newData = [...dataSource.value]
    const index = newData.findIndex(item => item.key === key)
    if (index > -1) {
      const item = newData[index]
      newData.splice(index, 1, { ...item, ...values } as DataType)
    }
    else {
      newData.push({ key, ...values } as DataType)
    }
    dataSource.value = newData
    editingKey.value = ''
  }
  catch (err) {
    console.log('Validate Failed:', err)
  }
}

function cancel() {
  editingKey.value = ''
}
</script>

<template>
  <a-form ref="formRef" :model="formModel">
    <a-table
      :columns="columns"
      :data-source="dataSource"
      :pagination="{ onChange: cancel }"
      bordered
    >
      <template #bodyCell="{ column, record, text }">
        <template v-if="column.key === 'operation'">
          <template v-if="isEditing(record)">
            <a-space size="small">
              <a-typography-link style="margin-inline-end: 8px" @click="save(record.key)">
                Save
              </a-typography-link>
              <a-popconfirm title="Sure to cancel?" @confirm="cancel">
                <a-typography-link>Cancel</a-typography-link>
              </a-popconfirm>
            </a-space>
          </template>
          <template v-else>
            <a-typography-link :disabled="editingKey !== ''" @click="edit(record)">
              Edit
            </a-typography-link>
          </template>
        </template>
        <template v-else-if="editableColumns.has(String(column.dataIndex))">
          <template v-if="isEditing(record)">
            <a-form-item
              :name="column.dataIndex as string"
              :rules="[{ required: true, message: `Please Input ${column.title}!` }]"
              style="margin: 0"
            >
              <a-input-number
                v-if="column.dataIndex === 'age'"
                v-model:value="formModel[column.dataIndex as string]"
              />
              <a-input
                v-else
                v-model:value="formModel[column.dataIndex as string]"
              />
            </a-form-item>
          </template>
          <template v-else>
            {{ text }}
          </template>
        </template>
      </template>
    </a-table>
  </a-form>
</template>
```
