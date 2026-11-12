# Value format

With `valueFormat` set, `v-model:value` takes and emits strings in that format, which is convenient for submitting directly to the backend; `format` only affects the display.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const date = ref('2024-10-01')
const month = ref<string | null>(null)
</script>

<template>
  <am-flex vertical gap="small">
    <am-date-picker v-model:value="date" value-format="YYYY-MM-DD" format="YYYY/MM/DD" />
    <div class="demo-result">
      Value: {{ JSON.stringify(date) }}
    </div>
    <am-date-picker v-model:value="month" picker="month" value-format="YYYYMM" format="YYYY/MM" placeholder="Please select a period" />
    <div class="demo-result">
      Value: {{ JSON.stringify(month) }}
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
