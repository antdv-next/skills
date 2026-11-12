# Input mode and custom buttons

`mode="input"` renders a full-width number input (without buttons), suitable for amounts and other values with a wide range; on blur the value is corrected according to `min` / `max` / `precision`. `controls` can hide the buttons or customize the icons.

## Source

```vue
<script setup lang="ts">
import { CaretDownOutlined, CaretUpOutlined } from '@antdv-next/icons'
import { h, ref } from 'vue'

const amount = ref<number | null>(null)
const controls = { upIcon: () => h(CaretUpOutlined), downIcon: () => h(CaretDownOutlined) }
</script>

<template>
  <am-flex vertical gap="middle">
    <am-input-number v-model:value="amount" mode="input" :min="0" :max="50000" :precision="2" prefix="¥" placeholder="Amount, up to 50000" />
    <am-flex align="center" gap="middle">
      <am-input-number :default-value="3" :controls="controls" />
      <am-input-number :default-value="3" :controls="false" />
    </am-flex>
  </am-flex>
</template>
```
