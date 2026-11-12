# Custom icon and image

The `image` of an option is an image url that fills the round icon holder (`icon` wins when both are set). Override `--am-share-sheet-icon-bg` and `--am-share-sheet-icon-color` through the `style` / `class` of an option to color it, and use the `icon` and `label` slots for full control. With `closeOnSelect` set to `false`, selecting an option does not close the panel.

## Source

```vue
<script setup lang="ts">
import type { ShareSheetOption } from '@antdv-next/mobile'
import { CheckOutlined, LinkOutlined, QqOutlined, WechatOutlined, WeiboOutlined } from '@antdv-next/icons'
import { h, ref } from 'vue'

const avatar = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" fill="#8b5cf6"/><circle cx="24" cy="19" r="8" fill="#fff"/><path d="M8 44c2-10 9-14 16-14s14 4 16 14z" fill="#fff"/></svg>',
)}`

function tint(color: string) {
  return { '--am-share-sheet-icon-bg': color, '--am-share-sheet-icon-color': '#fff' }
}

const open = ref(false)
const copied = ref(false)
const options: ShareSheetOption[] = [
  { key: 'friend', label: 'Alice', image: avatar },
  { key: 'wechat', label: 'WeChat', icon: h(WechatOutlined), style: tint('#07c160') },
  { key: 'qq', label: 'QQ', icon: h(QqOutlined), style: tint('#1e9eff') },
  { key: 'weibo', label: 'Weibo', icon: h(WeiboOutlined), style: tint('#e6162d') },
  { key: 'link', label: 'Copy link', icon: h(LinkOutlined), class: 'share-link' },
]

function onSelect(option: ShareSheetOption) {
  if (option.key === 'link')
    copied.value = true
  else
    open.value = false
}
</script>

<template>
  <am-button block @click="open = true">
    Custom icon and image
  </am-button>
  <am-share-sheet
    v-model:open="open"
    :options="options"
    :close-on-select="false"
    title="Share"
    @select="onSelect"
    @after-open-change="!$event && (copied = false)"
  >
    <template #icon="{ option }">
      <CheckOutlined v-if="option.key === 'link' && copied" />
    </template>
    <template #label="{ option }">
      {{ option.key === 'link' && copied ? 'Copied' : option.label }}
    </template>
  </am-share-sheet>
</template>

<style>
.share-link {
  --am-share-sheet-icon-bg: var(--am-color-primary-bg);
  --am-share-sheet-icon-color: var(--am-color-primary);
}
</style>
```
