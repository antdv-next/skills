# With clear icon

## Description (en-US)

Customize clear button.

A clear button with `tabIndex: -1` is excluded from Tab navigation.

## Source

```vue
<script setup lang="ts">
import { CloseSquareFilled } from '@antdv-next/icons'
import { h, ref } from 'vue'

const value = ref('hello world')
const customAllowClear = {
  clearIcon: h(CloseSquareFilled),
}
</script>

<template>
  <a-flex vertical gap="medium">
    <a-mentions v-model:value="value" allow-clear />
    <a-mentions v-model:value="value" :allow-clear="customAllowClear" />
    <a-mentions v-model:value="value" allow-clear :rows="3" />
    <a-mentions v-model:value="value" :allow-clear="{ tabIndex: -1 }" />
  </a-flex>
</template>
```
