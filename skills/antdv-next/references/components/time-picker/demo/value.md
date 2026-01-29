# 受控组件

## Description (zh-CN)

value 和 onChange 需要配合使用。

## Source

```vue
<script setup lang="ts">
import type { Dayjs } from 'dayjs'
import { shallowRef } from 'vue'

const value = shallowRef<Dayjs>()
</script>

<template>
  <a-time-picker v-model:value="value" />
</template>
```
