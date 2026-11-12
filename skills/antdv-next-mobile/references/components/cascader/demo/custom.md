# Custom display and field names

`displayRender` customizes the content displayed in the trigger (e.g. only the last level), `fieldNames` adapts to an existing data structure, and the `option` slot customizes the option content.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { regions } from './data'

const value = ref(['zhejiang', 'hangzhou', 'xihu'])

const departments = [
  {
    name: 'R&D Center',
    id: 1,
    count: 128,
    items: [
      { name: 'Frontend', id: 11, count: 32 },
      { name: 'Backend', id: 12, count: 56 },
      { name: 'QA', id: 13, count: 40 },
    ],
  },
  {
    name: 'Product Center',
    id: 2,
    count: 36,
    items: [
      { name: 'Product', id: 21, count: 20 },
      { name: 'Design', id: 22, count: 16 },
    ],
  },
]
const department = ref<number[]>([])

const displayRender = (labels: string[]) => labels[labels.length - 1]
</script>

<template>
  <am-flex vertical gap="small">
    <am-cascader v-model:value="value" :options="regions" :display-render="displayRender" title="Last level only" />
    <am-cascader
      v-model:value="department"
      :options="departments"
      :field-names="{ label: 'name', value: 'id', children: 'items' }"
      title="Department"
      placeholder="Please select a department"
    >
      <template #option="{ option }">
        <am-flex justify="space-between">
          <span>{{ option.name }}</span>
          <span class="demo-count">{{ option.count }} people</span>
        </am-flex>
      </template>
    </am-cascader>
  </am-flex>
</template>

<style>
.demo-count {
  color: var(--am-color-text-tertiary);
  font-weight: 400;
  font-size: 13px;
}
</style>
```
