# Ghost mode and sizes

`ghost` makes the collapse background transparent with no hairlines, which suits being placed inside a card; `size` provides three sizes and `bordered` controls the hairlines.

## Source

```vue
<script setup lang="ts">
import type { CollapseItemType } from '@antdv-next/mobile'
import { ref } from 'vue'

const items: CollapseItemType[] = [
  { key: '1', label: 'What is ghost mode?', content: 'A collapse with a transparent background and no hairlines.' },
  { key: '2', label: 'Can the size be changed?', content: 'Yes, set size to small / middle / large.' },
]

const size = ref<'small' | 'middle' | 'large'>('small')
</script>

<template>
  <am-flex vertical gap="middle">
    <am-segmented v-model:value="size" block :options="['small', 'middle', 'large']" />
    <am-collapse ghost :size="size" :items="items" :default-active-key="['1']" />
  </am-flex>
</template>
```
