# 值格式化

## Description (zh-CN)

通过 `valueFormat` 指定时间值的格式。设置后，`v-model:value` 可以直接使用字符串值。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const singleValue = shallowRef<string | null>('12:08:23')
const rangeValue = shallowRef<[string | null, string | null] | null>(['09:30:00', '18:00:00'])
</script>

<template>
  <a-space vertical :size="12">
    <a-space>
      <a-time-picker
        v-model:value="singleValue"
        value-format="HH:mm:ss"
        format="HH:mm:ss"
        allow-clear
      />
      <span>value: {{ singleValue ?? 'null' }}</span>
    </a-space>

    <a-space>
      <a-time-range-picker
        v-model:value="rangeValue"
        value-format="HH:mm:ss"
        format="HH:mm:ss"
        allow-clear
      />
      <span>value: {{ rangeValue ? `${rangeValue[0]} ~ ${rangeValue[1]}` : 'null' }}</span>
    </a-space>
  </a-space>
</template>
```
