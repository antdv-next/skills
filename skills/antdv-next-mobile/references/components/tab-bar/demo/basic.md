# Basic usage

Configure the tab items with `items`; the first item is active by default. `icon` accepts a function that receives the active state, making it easy to switch between outlined and filled icons.

## Source

```vue
<script setup lang="ts">
import type { TabBarItem } from '@antdv-next/mobile'
import { AppstoreFilled, AppstoreOutlined, HomeFilled, HomeOutlined, MessageFilled, MessageOutlined, UserOutlined } from '@antdv-next/icons'
import { h } from 'vue'

const items: TabBarItem[] = [
  { key: 'home', title: 'Home', icon: active => h(active ? HomeFilled : HomeOutlined) },
  { key: 'apps', title: 'Apps', icon: active => h(active ? AppstoreFilled : AppstoreOutlined) },
  { key: 'message', title: 'Messages', icon: active => h(active ? MessageFilled : MessageOutlined) },
  { key: 'me', title: 'Me', icon: () => h(UserOutlined) },
]
</script>

<template>
  <am-tab-bar :items="items" :safe-area="false" />
</template>
```
