# Range: form and custom trigger

Used as a form field it becomes borderless and takes part in validation. The default slot replaces the trigger completely; `toggle(true, 'end')` opens the end tab directly.

## Source

```vue
<script setup lang="ts">
import type { Dayjs } from 'dayjs'
import { reactive, ref } from 'vue'

type RangeValue = [Dayjs | null, Dayjs | null] | null

const model = reactive<{ leave: RangeValue }>({ leave: null })
const trip = ref<RangeValue>(null)
</script>

<template>
  <am-form :model="model" header="With Form">
    <am-form-item name="leave" label="Leave" :rules="[{ required: true, message: 'Please select the dates' }]">
      <am-range-picker v-model:value="model.leave" title="Leave dates" />
    </am-form-item>
  </am-form>
  <am-range-picker v-model:value="trip" title="Trip dates">
    <template #default="{ labels, toggle }">
      <am-list header="With List">
        <am-list-item title="Departure" :extra="labels[0] || 'Select'" clickable @click="toggle(true, 'start')" />
        <am-list-item title="Return" :extra="labels[1] || 'Select'" clickable @click="toggle(true, 'end')" />
      </am-list>
    </template>
  </am-range-picker>
</template>
```
