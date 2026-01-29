# config-provider

## Description (zh-CN)

支持 ConfigProvider 配置。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const open = shallowRef(false)
const domRef = shallowRef<HTMLDivElement>()

const getPopupContainer = () => domRef.value || document.body

function showDrawer() {
  open.value = true
}

function onClose() {
  open.value = false
}
</script>

<template>
  <a-config-provider :get-popup-container="getPopupContainer">
    <div
      ref="domRef"
      class="site-drawer-render-in-current-wrapper"
    >
      <a-button type="primary" @click="showDrawer">
        Open
      </a-button>
      <a-drawer
        v-model:open="open"
        title="ConfigProvider"
        placement="right"
        :root-style="{ position: 'absolute' }"
        @close="onClose"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-drawer>
    </div>
  </a-config-provider>
</template>

<style scoped>
.site-drawer-render-in-current-wrapper {
  position: relative;
  height: 200px;
  padding: 48px;
  overflow: hidden;
  text-align: center;
  background: #fafafa;
  border: 1px solid #ebedf0;
  border-radius: 2px;
}
</style>
```
