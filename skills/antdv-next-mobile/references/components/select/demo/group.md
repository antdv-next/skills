# Groups and field names

Items with an `options` field are rendered as group titles. `fieldNames` adapts to an existing data structure, and `labelInValue` makes the bound value contain both `label` and `value`.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = [
  { label: 'East China', options: [{ label: 'Shanghai', value: 'sh' }, { label: 'Hangzhou', value: 'hz' }, { label: 'Nanjing', value: 'nj' }] },
  { label: 'South China', options: [{ label: 'Guangzhou', value: 'gz' }, { label: 'Shenzhen', value: 'sz' }] },
  { label: 'North China', options: [{ label: 'Beijing', value: 'bj' }, { label: 'Tianjin', value: 'tj' }] },
]
const city = ref('hz')

const banks = [
  { name: 'Merchants Bank', code: 'CMB' },
  { name: 'ICBC', code: 'ICBC' },
  { name: 'Construction Bank', code: 'CCB' },
]
const bank = ref<{ label: string, value: string } | null>(null)
</script>

<template>
  <am-flex vertical gap="small">
    <am-select v-model:value="city" :options="options" show-search title="Select city" />
    <am-select
      v-model:value="bank"
      :options="banks"
      :field-names="{ label: 'name', value: 'code' }"
      label-in-value
      title="Bank"
      placeholder="Please select a bank"
    />
    <div class="demo-result">
      Value: {{ JSON.stringify(bank) }}
    </div>
  </am-flex>
</template>

<style scoped>
.demo-result {
  color: var(--am-color-text-tertiary);
  font-size: 13px;
}
</style>
```
