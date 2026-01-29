# 菜单隐藏方式

## Description (zh-CN)

默认是点击关闭菜单，可以关闭此功能。

## Source

```vue
<script setup lang="ts">
import type { MenuItemType } from 'antdv-next'
import { DownOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const open = ref(false)

const items: MenuItemType[] = [
  {
    label: 'Clicking me will not close the menu.',
    key: '1',
  },
  {
    label: 'Clicking me will not close the menu also.',
    key: '2',
  },
  {
    label: 'Clicking me will close the menu.',
    key: '3',
  },
]

function handleMenuClick(info: { key: string }) {
  if (info.key === '3') {
    open.value = false
  }
}

function handleOpenChange(nextOpen: boolean, info: { source: 'trigger' | 'menu' }) {
  if (info.source === 'trigger' || nextOpen) {
    open.value = nextOpen
  }
}
</script>

<template>
  <a-dropdown
    :menu="{ items, onClick: handleMenuClick }"
    :open="open"
    @open-change="handleOpenChange"
  >
    <a @click.prevent>
      <a-space>
        Hover me
        <DownOutlined />
      </a-space>
    </a>
  </a-dropdown>
</template>
```
