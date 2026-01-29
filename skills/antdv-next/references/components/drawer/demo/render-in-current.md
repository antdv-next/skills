# 渲染在当前容器

## Description (zh-CN)

渲染在当前 dom 里。自定义容器，查看 `getContainer`。

> 注意：在 v5 中 `style` 与 `className` 迁移至 Drawer 面板上与 Modal 保持一致，原 `style` 与 `className` 替换为 `rootStyle` 与 `rootClass`。

> 当 `getContainer` 返回 DOM 节点时，需要手动设置 `rootStyle` 为 `{ position: 'absolute' }`。

## Source

```vue
<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { theme } from 'antdv-next'
import { computed, ref } from 'vue'

const { token } = theme.useToken()
const open = ref(false)

const containerStyle = computed<CSSProperties>(() => ({
  position: 'relative',
  height: '200px',
  padding: '48px',
  overflow: 'hidden',
  background: token.value.colorFillAlter,
  border: `1px solid ${token.value.colorBorderSecondary}`,
  borderRadius: `${token.value.borderRadiusLG}px`,
}))
</script>

<template>
  <div :style="containerStyle">
    Render in this
    <div style="margin-top: 16px">
      <a-button type="primary" @click="open = true">
        Open
      </a-button>
    </div>
    <a-drawer
      v-model:open="open"
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :get-container="false"
      @close="open = false"
    >
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>
```
