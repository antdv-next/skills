# Fixed at the bottom

`fixed` fixes the tab bar at the bottom of the viewport, `placeholder` keeps a placeholder of the same height in the document flow, and `safeArea` is on by default to adapt to the bottom safe area. The demo simulates the viewport with a container that has a `transform`.

## Source

```vue
<script setup lang="ts">
import type { TabBarItem } from '@antdv-next/mobile'
import { AppstoreOutlined, HomeOutlined, UserOutlined } from '@antdv-next/icons'
import { h } from 'vue'

const items: TabBarItem[] = [
  { key: 'home', title: 'Home', icon: () => h(HomeOutlined) },
  { key: 'apps', title: 'Apps', icon: () => h(AppstoreOutlined) },
  { key: 'me', title: 'Me', icon: () => h(UserOutlined) },
]
</script>

<template>
  <div class="viewport">
    <div class="scroller">
      <p v-for="i in 12" :key="i" class="row">
        Content {{ i }}
      </p>
      <am-tab-bar :items="items" fixed placeholder />
    </div>
  </div>
</template>

<style scoped>
/* transform makes inner fixed elements position relative to this container */
.viewport {
  height: 240px;
  overflow: hidden;
  transform: translateZ(0);
}

.scroller {
  height: 100%;
  overflow-y: auto;
}

.row {
  margin: 0;
  padding: 12px 16px;
  color: var(--am-color-text-secondary);
}
</style>
```
