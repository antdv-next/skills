# 触发事件

## Description (zh-CN)

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。

## Source

```vue
<script setup lang="ts">
import type { MenuItemType } from 'antdv-next'
import { DownOutlined } from '@antdv-next/icons'
import { message } from 'antdv-next'

const [messageApi, ContextHolder] = message.useMessage()

function onClick({ key }: any) {
  messageApi.info(`Click on item ${key}`)
}

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
</script>

<template>
  <ContextHolder />
  <a-dropdown :menu="{ items }" @menu-click="onClick">
    <a @click.prevent>
      <a-space>
        Hover me, Click menu item
        <DownOutlined />
      </a-space>
    </a>
  </a-dropdown>
</template>
```
