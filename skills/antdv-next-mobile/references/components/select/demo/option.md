# Option description and custom rendering

The `description` of an option is shown below its text. The `option` slot fully customizes the option content, and the `labelRender` slot customizes what is displayed in the trigger.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const plans = [
  { label: 'Standard', value: 'standard', description: 'Arrives in 3 days · Free' },
  { label: 'Next day', value: 'next', description: 'Arrives tomorrow · ¥8' },
  { label: 'Same day', value: 'same', description: 'Arrives by 22:00 today · ¥18' },
  { label: 'Store pickup', value: 'self', description: 'Open 9:00 - 21:00', disabled: true },
]
const plan = ref('standard')

const colors = [
  { label: 'Aurora Blue', value: '#1677ff' },
  { label: 'Mint Green', value: '#52c41a' },
  { label: 'Sunset Orange', value: '#fa8c16' },
  { label: 'Sakura Pink', value: '#eb2f96' },
]
const color = ref('#1677ff')
</script>

<template>
  <am-flex vertical gap="small">
    <am-select v-model:value="plan" :options="plans" title="Delivery" />
    <am-select v-model:value="color" :options="colors" title="Theme color">
      <template #option="{ option }">
        <am-flex align="center" gap="small">
          <span class="demo-dot" :style="{ background: String(option.value) }" />
          {{ option.label }}
        </am-flex>
      </template>
      <template #labelRender="{ label, value }">
        <span class="demo-dot" :style="{ background: String(value) }" />
        {{ label }}
      </template>
    </am-select>
  </am-flex>
</template>

<style>
.demo-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-inline-end: 4px;
  border-radius: 50%;
}
</style>
```
