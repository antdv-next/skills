# 隐藏已选择选项

## Description (zh-CN)

隐藏下拉列表中已选择的选项。

## Source

```vue
<script setup lang="ts">
import { computed, shallowRef } from 'vue'

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters']

const selectedItems = shallowRef<string[]>([])

const filteredOptions = computed(() =>
  OPTIONS.filter(o => !selectedItems.value.includes(o)).map(item => ({
    value: item,
    label: item,
  })),
)
</script>

<template>
  <a-select
    v-model:value="selectedItems"
    mode="multiple"
    placeholder="Inserted are removed"
    style="width: 100%"
    :options="filteredOptions"
  />
</template>
```
