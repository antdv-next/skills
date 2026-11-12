# Load options lazily

Set `isLeaf: false` on an option and provide `loadData` to load the next level lazily: set `children` on the target option in the callback; when a Promise is returned, the loading icon stays until it settles.

## Source

```vue
<script setup lang="ts">
import type { CascaderOption } from '@antdv-next/mobile'
import { ref } from 'vue'

const options = ref<CascaderOption[]>([
  { label: 'Electronics', value: 'digital', isLeaf: false },
  { label: 'Appliances', value: 'appliance', isLeaf: false },
  { label: 'Books', value: 'book' },
])
const value = ref<string[]>([])

function loadData(selectedOptions: CascaderOption[]) {
  const target = selectedOptions[selectedOptions.length - 1]
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      target.children = selectedOptions.length === 1
        ? [
            { label: `${target.label} · Hot`, value: `${target.value}-hot`, isLeaf: false },
            { label: `${target.label} · New`, value: `${target.value}-new` },
          ]
        : [
            { label: 'Best selling', value: `${target.value}-sales` },
            { label: 'Top rated', value: `${target.value}-rate` },
          ]
      resolve()
    }, 800)
  })
}
</script>

<template>
  <am-cascader v-model:value="value" :options="options" :load-data="loadData" title="Category" placeholder="Please select a category" />
</template>
```
