# Multiple rows

Pass a nested array to `options` to show several rows. Each row scrolls horizontally on its own. The third argument of `select` is the row index.

## Source

```vue
<script setup lang="ts">
import type { ShareSheetOption } from '@antdv-next/mobile'
import {
  DeleteOutlined,
  EditOutlined,
  LinkOutlined,
  MailOutlined,
  PictureOutlined,
  QqOutlined,
  QrcodeOutlined,
  StarOutlined,
  WarningOutlined,
  WechatOutlined,
  WeiboOutlined,
} from '@antdv-next/icons'
import { message } from '@antdv-next/mobile'
import { h, ref } from 'vue'

const open = ref(false)
const options: ShareSheetOption[][] = [
  [
    { key: 'wechat', label: 'WeChat', icon: h(WechatOutlined) },
    { key: 'qq', label: 'QQ', icon: h(QqOutlined) },
    { key: 'weibo', label: 'Weibo', icon: h(WeiboOutlined) },
    { key: 'mail', label: 'Mail', icon: h(MailOutlined) },
    { key: 'poster', label: 'Poster', icon: h(PictureOutlined) },
    { key: 'qrcode', label: 'QR code', icon: h(QrcodeOutlined) },
  ],
  [
    { key: 'link', label: 'Copy link', icon: h(LinkOutlined) },
    { key: 'star', label: 'Favorite', icon: h(StarOutlined) },
    { key: 'edit', label: 'Edit', icon: h(EditOutlined) },
    { key: 'report', label: 'Report', icon: h(WarningOutlined) },
    { key: 'delete', label: 'Delete', icon: h(DeleteOutlined), disabled: true },
  ],
]

function onSelect(option: ShareSheetOption, index: number, rowIndex: number) {
  message.info(`Row ${rowIndex + 1}, item ${index + 1}: ${option.key}`)
}
</script>

<template>
  <am-button block @click="open = true">
    Multiple rows
  </am-button>
  <am-share-sheet v-model:open="open" :options="options" @select="onSelect" />
</template>
```
