# 菜单可选选择

## Description (zh-CN)

添加 `menu` 中的 `selectable` 属性可以开启选择能力。

## Source

```vue
<script setup lang="ts">
import type { MenuItemType } from 'antdv-next'
import { DownOutlined } from '@antdv-next/icons'

const items: MenuItemType[] = [
  {
    key: '1',
    label: 'Item 1',
  },
  {
    key: '2',
    label: 'Item 2',
  },
  {
    key: '3',
    label: 'Item 3',
  },
]
</script>

<template>
  <a-dropdown
    :menu="{
      items,
      selectable: true,
      defaultSelectedKeys: ['3'],
    }"
  >
    <a-typography-link>
      <a-space>
        Selectable
        <DownOutlined />
      </a-space>
    </a-typography-link>
  </a-dropdown>
</template>
```
