# Custom trigger and form

The default slot replaces the built-in trigger and is often used with `List`; inside a `Form`, use the built-in trigger directly and it is rendered as borderless cell content automatically.

## Source

```vue
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { regions } from './data'

const value = ref(['shanghai', 'pudong'])
const model = reactive<{ region: string[] }>({ region: [] })
</script>

<template>
  <am-list header="With List">
    <am-cascader v-model:value="value" :options="regions" title="Shipping region">
      <template #default="{ label, toggle }">
        <am-list-item title="Shipping region" :extra="label || 'Please select'" clickable @click="toggle()" />
      </template>
    </am-cascader>
  </am-list>
  <am-form :model="model" header="With Form">
    <am-form-item name="region" label="Region" :rules="[{ required: true, type: 'array', message: 'Please select a region' }]">
      <am-cascader v-model:value="model.region" :options="regions" title="Region" placeholder="Please select a region" />
    </am-form-item>
  </am-form>
</template>
```
