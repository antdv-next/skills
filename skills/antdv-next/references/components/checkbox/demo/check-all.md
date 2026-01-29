# 全选

## Description (zh-CN)

在实现全选效果时，你可能会用到 `indeterminate` 属性。

## Source

```vue
<script setup lang="ts">
import { computed, shallowRef } from 'vue'

const plainOptions = ['Apple', 'Pear', 'Orange']
const defaultCheckedList = ['Apple', 'Orange']

const checkedList = shallowRef<string[]>(defaultCheckedList)

const checkAll = computed(() => plainOptions.length === checkedList.value.length)
const indeterminate = computed(() => checkedList.value.length > 0 && checkedList.value.length < plainOptions.length)

function onChange(list: string[]) {
  checkedList.value = list
}

function onCheckAllChange(e: any) {
  checkedList.value = e.target.checked ? plainOptions : []
}
</script>

<template>
  <a-checkbox
    :indeterminate="indeterminate"
    :checked="checkAll"
    @change="onCheckAllChange"
  >
    Check all
  </a-checkbox>
  <a-divider />
  <a-checkbox-group
    :options="plainOptions"
    :value="checkedList"
    @change="onChange"
  />
</template>
```
