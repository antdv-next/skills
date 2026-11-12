# Value format

With `valueFormat` set, `v-model:value` sends and receives strings in that format.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref('07:30')
</script>

<template>
  <am-flex vertical gap="small">
    <am-time-picker v-model:value="value" format="HH:mm" value-format="HH:mm" title="Alarm" />
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
