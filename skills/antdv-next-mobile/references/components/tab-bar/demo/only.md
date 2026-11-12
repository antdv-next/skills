# Icon only / title only

`title` and `icon` are both optional, so you can show only icons or only titles; `disabled` disables an item.

## Source

```vue
<script setup lang="ts">
import type { TabBarItem } from '@antdv-next/mobile'
import { AppstoreOutlined, HomeOutlined, MessageOutlined, UserOutlined } from '@antdv-next/icons'
import { h } from 'vue'

const iconOnly: TabBarItem[] = [
  { key: 'home', icon: () => h(HomeOutlined) },
  { key: 'apps', icon: () => h(AppstoreOutlined) },
  { key: 'message', icon: () => h(MessageOutlined), badge: true },
  { key: 'me', icon: () => h(UserOutlined) },
]

const titleOnly: TabBarItem[] = [
  { key: 'home', title: 'Home' },
  { key: 'apps', title: 'Apps', badge: 3 },
  { key: 'message', title: 'Messages', disabled: true },
  { key: 'me', title: 'Me' },
]
</script>

<template>
  <div class="stack">
    <am-tab-bar :items="iconOnly" :safe-area="false" />
    <am-tab-bar :items="titleOnly" :safe-area="false" />
  </div>
</template>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
```
