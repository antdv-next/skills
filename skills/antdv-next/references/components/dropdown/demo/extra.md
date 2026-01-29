# 额外节点

## Description (zh-CN)

带有快捷方式的下拉菜单。

## Source

```vue
<script setup lang="ts">
import type { MenuItemType } from 'antdv-next'
import { DownOutlined, SettingOutlined } from '@antdv-next/icons'

const items: MenuItemType[] = [
  {
    key: '1',
    label: 'My Account',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
    extra: '⌘P',
  },
  {
    key: '3',
    label: 'Billing',
    extra: '⌘B',
  },
  {
    key: '4',
    label: 'Settings',
    icon: SettingOutlined,
    extra: '⌘S',
  },
]
</script>

<template>
  <a-dropdown :menu="{ items }">
    <a @click.prevent>
      <a-space>
        Hover me
        <DownOutlined />
      </a-space>
    </a>
  </a-dropdown>
</template>
```
