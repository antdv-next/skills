# Basic usage

In single mode, tapping an option commits it and closes the popup. `allowClear` shows a clear icon when there is a value.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = [
  { label: 'ID card', value: 'id' },
  { label: 'Passport', value: 'passport' },
  { label: 'HK/Macao travel permit', value: 'hk' },
  { label: 'Taiwan travel permit', value: 'tw' },
  { label: 'Military ID (unsupported)', value: 'army', disabled: true },
]
const value = ref<string | null>(null)
</script>

<template>
  <am-flex vertical gap="small">
    <am-select v-model:value="value" :options="options" title="ID type" placeholder="Please select" allow-clear />
    <div class="demo-result">
      Value: {{ JSON.stringify(value) }}
    </div>
  </am-flex>
</template>

<style scoped>
.demo-result {
  color: var(--am-color-text-tertiary);
  font-size: 13px;
}
</style>
```
