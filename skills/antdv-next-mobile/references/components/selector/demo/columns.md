# Multi-column layout

Specify the number of columns through `columns`; options are laid out with equal width, which suits filter panels.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = ['Any', '1 room', '2 rooms', '3 rooms', '4 rooms', '5+ rooms'].map((label, value) => ({ label, value }))
const two = ref([0])
const three = ref([1, 2])
</script>

<template>
  <div class="demo-selector-list">
    <am-selector v-model:value="two" :options="options" :columns="2" />
    <am-selector v-model:value="three" :options="options" :columns="3" multiple />
  </div>
</template>

<style scoped>
.demo-selector-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
```
