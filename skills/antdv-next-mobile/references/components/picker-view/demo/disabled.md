# Disabled options and loading state

An option with `disabled` set is grayed out and cannot be settled on; when scrolled to a disabled option, the wheel snaps to the nearest selectable one. `loading` is for scenarios where the column data is fetched asynchronously.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const columns = [
  [
    { label: '09:00', value: '09:00' },
    { label: '10:00 (Full)', value: '10:00', disabled: true },
    { label: '11:00', value: '11:00' },
    { label: '14:00 (Full)', value: '14:00', disabled: true },
    { label: '15:00', value: '15:00' },
    { label: '16:00', value: '16:00' },
  ],
]
const value = ref(['11:00'])
const loading = ref(false)

function reload() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1500)
}
</script>

<template>
  <am-flex vertical gap="middle">
    <am-picker-view v-model:value="value" :columns="columns" :loading="loading" />
    <am-button block :loading="loading" @click="reload">
      Reload
    </am-button>
  </am-flex>
</template>
```
