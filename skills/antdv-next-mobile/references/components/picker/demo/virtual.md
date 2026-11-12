# Large data / virtual scrolling

The wheel uses virtual scrolling by default (`virtual`): each column only renders the options near the visible area. The column below has 10,000 options but only a dozen or so nodes are actually mounted, and dragging and momentum scrolling feel the same. Set `:virtual="false"` to render all options.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const columns = [
  Array.from({ length: 10000 }, (_, index) => ({ label: `No. ${index + 1}`, value: index + 1 })),
]
const value = ref<number[]>([5000])
</script>

<template>
  <am-flex vertical gap="small">
    <am-picker v-model:value="value" :columns="columns" title="Select a number" placeholder="10,000 options" />
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
