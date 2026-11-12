# Large data / virtual scrolling

The option list of every level uses virtual scrolling by default (`virtual`): the second level below has 3,000 options, and only a dozen or so near the visible area are rendered. When you tap a tab to go back to a level, the selected option of that level is scrolled to the middle of the list.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = ['East', 'South', 'North'].map((region, r) => ({
  label: `${region} Region`,
  value: `r${r}`,
  children: Array.from({ length: 3000 }, (_, index) => ({
    label: `${region} Store ${String(index + 1).padStart(4, '0')}`,
    value: `r${r}-s${index}`,
    children: ['1F', '2F', '3F'].map((floor, f) => ({ label: floor, value: `r${r}-s${index}-f${f}` })),
  })),
}))

const value = ref<string[]>(['r1', 'r1-s1999', 'r1-s1999-f1'])
</script>

<template>
  <am-flex vertical gap="small">
    <am-cascader v-model:value="value" :options="options" title="Select store" placeholder="3,000 stores per region" />
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
