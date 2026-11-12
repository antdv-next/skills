# Check all

The `indeterminate` property can be used to represent a "partially checked" state when implementing check all.

## Source

```vue
<script setup lang="ts">
import type { CheckboxChangeEvent } from '@antdv-next/mobile'
import { computed, ref } from 'vue'

const options = ['Apple', 'Pear', 'Orange']
const checkedList = ref<string[]>(['Apple'])

const checkAll = computed(() => checkedList.value.length === options.length)
const indeterminate = computed(() => checkedList.value.length > 0 && !checkAll.value)

function onCheckAllChange(e: CheckboxChangeEvent) {
  checkedList.value = e.target.checked ? [...options] : []
}
</script>

<template>
  <am-flex vertical gap="small">
    <am-checkbox :checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllChange">
      Check all
    </am-checkbox>
    <am-checkbox-group v-model:value="checkedList" :options="options" />
  </am-flex>
</template>
```
