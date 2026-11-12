# More fields and disabled

All data entry components follow the same form contract: they follow the `disabled`, `size` and `variant` of `Form`, and trigger `change` validation after the value changes. `contentAlign="end"` aligns small controls such as switches and steppers to the right.

## Source

```vue
<script setup lang="ts">
import { reactive, ref } from 'vue'

const disabled = ref(false)
const model = reactive({
  count: 1,
  express: 'sf',
  tags: [] as string[],
  score: 3,
  budget: 30,
  size: ['m'],
  agree: false,
})

const expressOptions = [
  { label: 'SF', value: 'sf' },
  { label: 'JD', value: 'jd' },
  { label: 'Pickup', value: 'self' },
]
const tagOptions = ['Urgent', 'Fragile', 'Insured']
const sizeOptions = [
  { label: 'S', value: 's' },
  { label: 'M', value: 'm' },
  { label: 'L', value: 'l' },
  { label: 'XL', value: 'xl', disabled: true },
]
const mustAgree = [{
  validator: async (_rule: unknown, value: boolean) => {
    if (!value)
      throw new Error('Please read and accept the agreement')
  },
}]
</script>

<template>
  <am-form :model="model" :disabled="disabled" :label-width="64">
    <am-form-item name="count" label="Qty" content-align="end">
      <am-input-number v-model:value="model.count" :min="1" :max="10" />
    </am-form-item>
    <am-form-item name="size" label="Size" :rules="[{ required: true, type: 'array', message: 'Please select a size' }]">
      <am-selector v-model:value="model.size" :options="sizeOptions" :columns="4" />
    </am-form-item>
    <am-form-item name="express" label="Courier">
      <am-radio-group v-model:value="model.express" :options="expressOptions" />
    </am-form-item>
    <am-form-item name="tags" label="Tags">
      <am-checkbox-group v-model:value="model.tags" :options="tagOptions" />
    </am-form-item>
    <am-form-item name="score" label="Score">
      <am-rate v-model:value="model.score" />
    </am-form-item>
    <am-form-item name="budget" label="Budget">
      <am-slider v-model:value="model.budget" />
    </am-form-item>
    <am-form-item name="agree" :rules="mustAgree">
      <am-checkbox v-model:checked="model.agree">
        I have read and agree to the User Agreement
      </am-checkbox>
    </am-form-item>
    <template #footer>
      <am-flex vertical gap="small">
        <am-button type="primary" html-type="submit" block>
          Submit
        </am-button>
        <am-button block :disabled="false" @click="disabled = !disabled">
          {{ disabled ? 'Enable' : 'Disable' }}
        </am-button>
      </am-flex>
    </template>
  </am-form>
</template>
```
