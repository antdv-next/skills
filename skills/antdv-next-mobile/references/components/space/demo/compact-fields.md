# Group selection fields

Selection fields (Select, Picker, DatePicker, Cascader, etc.) can take part in a group as well. Inputs and selection fields share the remaining width equally, while buttons and Addons keep their own width.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const currency = ref('CNY')
const amount = ref<number | null>(100)
const unit = ref(['kg'])
const weight = ref('')
const date = ref()

const currencies = [
  { label: 'Yuan', value: 'CNY' },
  { label: 'Dollar', value: 'USD' },
  { label: 'Euro', value: 'EUR' },
]
const units = [[{ label: 'kg', value: 'kg' }, { label: 'g', value: 'g' }, { label: 't', value: 't' }]]
</script>

<template>
  <am-flex vertical gap="middle">
    <am-space-compact block>
      <am-select v-model:value="currency" :options="currencies" title="Currency" style="flex: 0 0 110px" />
      <am-input-number v-model:value="amount" mode="input" :min="0" placeholder="Amount" />
      <am-button type="primary">
        Transfer
      </am-button>
    </am-space-compact>

    <am-space-compact block>
      <am-input v-model:value="weight" placeholder="Weight" inputmode="decimal" />
      <am-picker v-model:value="unit" :columns="units" title="Unit" style="flex: 0 0 96px" />
    </am-space-compact>

    <am-space-compact block>
      <am-space-addon>Depart</am-space-addon>
      <am-date-picker v-model:value="date" placeholder="Select date" />
      <am-button color="primary" variant="filled">
        Search
      </am-button>
    </am-space-compact>
  </am-flex>
</template>
```
