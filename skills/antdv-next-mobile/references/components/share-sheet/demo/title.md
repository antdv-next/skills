# Title and description

`title` and `description` set the header of the panel, and the `description` of an option is shown below its name. `cancelText` changes the cancel button text; `null` or `showCancel` set to `false` hides the button.

## Source

```vue
<script setup lang="ts">
import type { ShareSheetOption } from '@antdv-next/mobile'
import { LinkOutlined, PictureOutlined, QrcodeOutlined, WechatOutlined } from '@antdv-next/icons'
import { h, ref } from 'vue'

const open = ref(false)
const plain = ref(false)
const options: ShareSheetOption[] = [
  { key: 'wechat', label: 'WeChat', icon: h(WechatOutlined) },
  { key: 'link', label: 'Copy link', icon: h(LinkOutlined), description: 'Valid 7 days' },
  { key: 'poster', label: 'Poster', icon: h(PictureOutlined), description: 'Save image' },
  { key: 'qrcode', label: 'QR code', icon: h(QrcodeOutlined) },
]
</script>

<template>
  <am-space direction="vertical" block>
    <am-button block @click="open = true">
      Title and description
    </am-button>
    <am-button block @click="plain = true">
      Without cancel button
    </am-button>
  </am-space>
  <am-share-sheet
    v-model:open="open"
    :options="options"
    title="Share with friends"
    description="Friends get a coupon after they sign up"
    cancel-text="Not now"
  />
  <am-share-sheet v-model:open="plain" :options="options" title="Share with friends" :show-cancel="false" />
</template>
```
