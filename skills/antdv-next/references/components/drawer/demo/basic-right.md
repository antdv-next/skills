# 基本

## Description (zh-CN)

基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const open = shallowRef(false)
function showDrawer() {
  open.value = true
}
</script>

<template>
  <a-button type="primary" @click="showDrawer">
    Open
  </a-button>
  <a-drawer
    v-model:open="open"
    title="Basic Drawer"
    :closable="{ 'aria-label': 'Close Button' }"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
```
