# Variant, size and status

Like the selection components on PC, it supports `variant`, `size`, `status`, `disabled` and `allowClear`.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const columns = [['Red', 'Orange', 'Yellow', 'Green', 'Blue'].map(label => ({ label, value: label }))]
const value = ref(['Green'])
</script>

<template>
  <am-flex vertical gap="small">
    <am-picker v-model:value="value" :columns="columns" variant="outlined" allow-clear />
    <am-picker v-model:value="value" :columns="columns" variant="filled" />
    <am-picker v-model:value="value" :columns="columns" variant="underlined" />
    <am-picker v-model:value="value" :columns="columns" variant="borderless" />
    <am-picker v-model:value="value" :columns="columns" size="small" />
    <am-picker v-model:value="value" :columns="columns" size="large" />
    <am-picker v-model:value="value" :columns="columns" status="error" />
    <am-picker v-model:value="value" :columns="columns" status="warning" variant="filled" />
    <am-picker v-model:value="value" :columns="columns" disabled />
  </am-flex>
</template>
```
