# 值格式化

## Description (zh-CN)

通过 `valueFormat` 指定日期值的格式。设置后，`v-model:value` 可以直接使用字符串值。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const singleValue = shallowRef<string | null>('2026-02-12')
const rangeValue = shallowRef<[string | null, string | null] | null>(['2026-02-01', '2026-02-12'])
</script>

<template>
  <a-space vertical :size="12">
    <a-space>
      <a-date-picker
        v-model:value="singleValue"
        value-format="YYYY-MM-DD"
        format="YYYY-MM-DD"
        allow-clear
      />
      <span>value: {{ singleValue ?? 'null' }}</span>
    </a-space>

    <a-space>
      <a-range-picker
        v-model:value="rangeValue"
        value-format="YYYY-MM-DD"
        format="YYYY-MM-DD"
        allow-clear
      />
      <span>value: {{ rangeValue ? `${rangeValue[0]} ~ ${rangeValue[1]}` : 'null' }}</span>
    </a-space>
  </a-space>
</template>
```
