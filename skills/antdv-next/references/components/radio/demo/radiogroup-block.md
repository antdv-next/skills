# Block 单选组合

## Description (zh-CN)

`block` 属性将使 Radio.Group 撑满父容器。

## Source

```vue
<script setup lang="ts">
import type { CheckboxOptionType } from 'antdv-next'
import { shallowRef } from 'vue'

const options: CheckboxOptionType[] = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
]
const value = shallowRef('Apple')
</script>

<template>
  <a-flex vertical gap="middle">
    <a-radio-group v-model:value="value" block :options="options" />
    <a-radio-group
      v-model:value="value"
      block
      :options="options"
      option-type="button"
      button-style="solid"
    />
    <a-radio-group
      v-model:value="value"
      block
      :options="options"
      option-type="button"
    />
  </a-flex>
</template>
```
