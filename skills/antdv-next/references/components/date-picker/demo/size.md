# 三种大小

## Description (zh-CN)

三种大小的输入框，若不设置，则为 `middle`。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

type SizeType = 'large' | 'middle' | 'small'

const size = shallowRef<SizeType>('middle')
</script>

<template>
  <a-space vertical :size="12">
    <a-radio-group v-model:value="size">
      <a-radio-button value="large">
        Large
      </a-radio-button>
      <a-radio-button value="middle">
        middle
      </a-radio-button>
      <a-radio-button value="small">
        Small
      </a-radio-button>
    </a-radio-group>
    <a-date-picker :size="size" />
    <a-date-picker :size="size" picker="month" />
    <a-range-picker :size="size" />
    <a-date-picker :size="size" picker="week" />
  </a-space>
</template>
```
