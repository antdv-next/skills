# Controlled page switching

Controlled with `v-model:activeKey`, switching the page content according to the active item.

## Source

```vue
<script setup lang="ts">
import type { TabBarItem } from '@antdv-next/mobile'
import { AppstoreOutlined, HomeOutlined, MessageOutlined, UserOutlined } from '@antdv-next/icons'
import { computed, h, ref } from 'vue'

const items: TabBarItem[] = [
  { key: 'home', title: 'Home', icon: () => h(HomeOutlined) },
  { key: 'apps', title: 'Apps', icon: () => h(AppstoreOutlined) },
  { key: 'message', title: 'Messages', icon: () => h(MessageOutlined) },
  { key: 'me', title: 'Me', icon: () => h(UserOutlined) },
]

const activeKey = ref<string | number>('message')
const current = computed(() => items.find(item => item.key === activeKey.value))
</script>

<template>
  <div class="page">
    <div class="page-body">
      {{ current?.title }} page
    </div>
    <am-tab-bar v-model:active-key="activeKey" :items="items" :safe-area="false" />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 220px;
}

.page-body {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: var(--am-color-text-tertiary);
  font-size: 16px;
}
</style>
```
