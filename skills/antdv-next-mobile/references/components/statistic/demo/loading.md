# Loading

A skeleton placeholder is shown while the value is loading.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(true)
</script>

<template>
  <am-flex vertical gap="middle">
    <am-flex gap="large">
      <am-statistic title="Active Users" :value="112893" :loading="loading" style="flex: 1" />
      <am-statistic title="Balance (CNY)" :value="112893.12" :precision="2" :loading="loading" style="flex: 1" />
    </am-flex>
    <am-flex align="center" justify="space-between">
      <span>Loading</span>
      <am-switch v-model:checked="loading" />
    </am-flex>
  </am-flex>
</template>
```
