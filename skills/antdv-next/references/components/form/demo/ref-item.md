# ref-item

## Description (zh-CN)

使用 ref 控制表单项聚焦。

## Source

```vue
<script setup lang="ts">
import { ref, shallowRef } from 'vue'

const list = ref(['light'])
const inputRef = shallowRef<any>()
const listRefs = ref<any[]>([])

function focusMain() {
  inputRef.value?.focus?.()
}

function focusList() {
  if (listRefs.value[0])
    listRefs.value[0].focus?.()
}
</script>

<template>
  <a-form style="max-width: 600px">
    <a-form-item name="test" label="test">
      <a-input ref="inputRef" />
    </a-form-item>

    <a-form-item v-for="(item, index) in list" :key="item" :name="['list', index]">
      <a-input :ref="el => (listRefs[index] = el)" />
    </a-form-item>

    <a-space>
      <a-button html-type="button" @click="focusMain">
        Focus Form.Item
      </a-button>
      <a-button html-type="button" @click="focusList">
        Focus List Item
      </a-button>
    </a-space>
  </a-form>
</template>
```
