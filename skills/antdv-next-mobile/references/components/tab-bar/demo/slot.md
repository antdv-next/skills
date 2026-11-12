# Custom rendering

Use the `icon` / `title` slots for custom rendering; the slot params contain the current item and the active state. The active color is adjusted with component tokens.

## Source

```vue
<script setup lang="ts">
import type { TabBarItem } from '@antdv-next/mobile'

const items: TabBarItem[] = [
  { key: 'home', title: 'Home' },
  { key: 'discover', title: 'Discover' },
  { key: 'cart', title: 'Cart', badge: 2 },
  { key: 'me', title: 'Me' },
]

const emojis: Record<string, [string, string]> = {
  home: ['🏠', '🏡'],
  discover: ['🧭', '🚀'],
  cart: ['🛒', '🛍️'],
  me: ['🙂', '😎'],
}
</script>

<template>
  <am-tab-bar class="custom-tab-bar" :items="items" default-active-key="discover" :safe-area="false">
    <template #icon="{ item, active }">
      <span class="emoji" :class="{ active }">{{ emojis[item.key][active ? 1 : 0] }}</span>
    </template>
    <template #title="{ item, active }">
      <b v-if="active">{{ item.title }}</b>
      <template v-else>
        {{ item.title }}
      </template>
    </template>
  </am-tab-bar>
</template>

<style scoped>
.custom-tab-bar {
  --am-tab-bar-height: 56px;
  --am-tab-bar-active-color: #eb2f96;
}

.emoji {
  font-size: 22px;
  transition: transform 0.2s;
}

.emoji.active {
  transform: scale(1.2);
}
</style>
```
