# Badge

A badge is shown when `badge` is a number or text, and a red dot when it is `true`.

## Source

```vue
<script setup lang="ts">
import type { TabBarItem } from '@antdv-next/mobile'
import { AppstoreOutlined, HomeOutlined, MessageOutlined, UserOutlined } from '@antdv-next/icons'
import { h } from 'vue'

const items: TabBarItem[] = [
  { key: 'home', title: 'Home', icon: () => h(HomeOutlined), badge: true },
  { key: 'apps', title: 'Apps', icon: () => h(AppstoreOutlined), badge: 5 },
  { key: 'message', title: 'Messages', icon: () => h(MessageOutlined), badge: '99+' },
  { key: 'me', title: 'Me', icon: () => h(UserOutlined), badge: 'new' },
]
</script>

<template>
  <am-tab-bar :items="items" :safe-area="false" />
</template>
```
