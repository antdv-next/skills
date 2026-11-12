# As a form field

With `trigger` set, a trigger consistent with the other selection components is rendered and shows the formatted value, so it can be placed straight into a `Form`; the default slot lets you fully customize the trigger.

## Source

```vue
<script setup lang="ts">
import { reactive } from 'vue'

const model = reactive<{ date: string | null, stay: string[] }>({ date: null, stay: [] })
</script>

<template>
  <am-form :model="model">
    <am-form-item name="date" label="Departure" :rules="[{ required: true, message: 'Please select a date' }]">
      <am-calendar v-model:value="model.date" trigger value-format="YYYY-MM-DD" placeholder="Please select a date" :show-confirm="false" />
    </am-form-item>
    <am-form-item name="stay" label="Stay">
      <am-calendar
        v-model:value="model.stay"
        trigger
        allow-clear
        selection-mode="range"
        value-format="YYYY-MM-DD"
        format="M/D"
        placeholder="Check-in - Check-out"
      />
    </am-form-item>
  </am-form>
  <div style="padding: 12px 16px">
    <am-calendar v-model:value="model.date" value-format="YYYY-MM-DD">
      <template #default="{ label, toggle }">
        <am-button block @click="toggle()">
          {{ label || 'Custom trigger' }}
        </am-button>
      </template>
    </am-calendar>
  </div>
</template>
```
