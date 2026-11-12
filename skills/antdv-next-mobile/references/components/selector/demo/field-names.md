# Custom field names and slots

`fieldNames` lets you use the data structure returned by the backend directly; slots such as `label` fully customize the option content.

## Source

```vue
<script setup lang="ts">
import { EnvironmentOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const cities = [
  { name: 'Hangzhou', code: 330100, remark: 'Zhejiang' },
  { name: 'Shanghai', code: 310000, remark: 'Municipality' },
  { name: 'Chengdu', code: 510100, remark: 'Sichuan', closed: true },
]
const value = ref([330100])
</script>

<template>
  <am-selector
    v-model:value="value"
    :options="cities"
    :columns="3"
    :field-names="{ label: 'name', value: 'code', description: 'remark', disabled: 'closed' }"
  >
    <template #label="{ option, checked }">
      <EnvironmentOutlined v-if="checked" /> {{ option.name }}
    </template>
  </am-selector>
</template>
```
