# Show total

Show the total number of data items and the current range with the `showTotal` prop or the same-named slot.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const current = ref(1)
const showTotal = (total: number) => `Total ${total} items`
</script>

<template>
  <am-flex vertical gap="large">
    <am-pagination v-model:current="current" :total="85" :page-size="20" :show-total="showTotal" />
    <am-pagination v-model:current="current" simple :total="85" :page-size="20">
      <template #showTotal="{ total, range }">
        <b>{{ range[0] }}-{{ range[1] }}</b> of {{ total }} items
      </template>
    </am-pagination>
  </am-flex>
</template>
```
