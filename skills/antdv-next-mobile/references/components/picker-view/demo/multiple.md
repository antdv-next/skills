# Multiple columns

Multiple columns are independent of each other. The second argument of the `change` event contains the full selected options of each column, `items`, and the column that changed, `columnIndex`.

## Source

```vue
<script setup lang="ts">
import type { PickerChangeInfo, PickerValue } from '@antdv-next/mobile'
import { ref } from 'vue'

const columns = [
  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((label, index) => ({ label, value: index + 1 })),
  [{ label: 'Morning', value: 'am' }, { label: 'Afternoon', value: 'pm' }, { label: 'Evening', value: 'night' }],
]
const value = ref<PickerValue[]>([3, 'pm'])
const text = ref('Wed Afternoon')

function onChange(_: PickerValue[], info: PickerChangeInfo) {
  text.value = info.items.map(item => item?.label).join(' ')
}
</script>

<template>
  <am-picker-view v-model:value="value" :columns="columns" @change="onChange" />
  <div class="demo-result">
    {{ text }}
  </div>
</template>

<style scoped>
.demo-result {
  margin-top: 12px;
  color: var(--am-color-text-secondary);
  font-size: 14px;
  text-align: center;
}
</style>
```
