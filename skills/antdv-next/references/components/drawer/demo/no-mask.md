# no-mask

## Description (zh-CN)

通过 `mask={false}` 去掉遮罩。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const open = shallowRef(false)

function showDrawer() {
  open.value = true
}

function onClose() {
  open.value = false
}
</script>

<template>
  <a-button type="primary" @click="showDrawer">
    Open
  </a-button>
  <a-drawer
    v-model:open="open"
    title="Drawer without mask"
    placement="right"
    :mask="false"
    :styles="{
      mask: {
        width: '333px',
        background: 'red',
        borderRadius: '20px',
        boxShadow: '-5px 0 5px green',
        overflow: 'hidden',
      },
    }"
    @close="onClose"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
```
