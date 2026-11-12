# Custom trigger

The default slot replaces the built-in trigger and is often used together with `List`; inside a `Form`, use the built-in trigger directly, which is automatically rendered as borderless cell content.

## Source

```vue
<script setup lang="ts">
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { reactive, ref } from 'vue'

const birthday = ref<Dayjs | null>(dayjs('1995-06-15'))
const model = reactive<{ expire: string | null }>({ expire: null })
</script>

<template>
  <am-list header="With List">
    <am-date-picker v-model:value="birthday" :max-date="dayjs()" :min-date="dayjs('1950-01-01')" title="Birthday">
      <template #default="{ label, toggle }">
        <am-list-item title="Birthday" :extra="label || 'Please select'" clickable @click="toggle()" />
      </template>
    </am-date-picker>
  </am-list>
  <am-form :model="model" header="With Form">
    <am-form-item name="expire" label="Valid until" :rules="[{ required: true, message: 'Please select a date' }]">
      <am-date-picker v-model:value="model.expire" value-format="YYYY-MM-DD" title="ID expiry date" placeholder="Please select" />
    </am-form-item>
  </am-form>
</template>
```
