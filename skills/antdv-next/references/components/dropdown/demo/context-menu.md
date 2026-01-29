# 右键菜单

## Description (zh-CN)

默认是移入触发菜单，可以点击鼠标右键触发。弹出菜单位置会跟随右键点击位置变动。

## Source

```vue
<script setup lang="ts">
import type { MenuItemType } from 'antdv-next'
import { theme } from 'antdv-next'

const items: MenuItemType[] = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
]

const { token } = theme.useToken()
</script>

<template>
  <a-dropdown :menu="{ items }" :trigger="['contextMenu']">
    <div
      :style="{
        color: token.colorTextTertiary,
        background: token.colorBgLayout,
        height: '200px',
        textAlign: 'center',
        lineHeight: '200px',
      }"
    >
      Right Click on here
    </div>
  </a-dropdown>
</template>
```
