# Scrollable tab bar

When the tabs exceed the width, the tab bar can scroll horizontally. After switching, the active tab scrolls to the center automatically and the ink bar slides along.

## Source

```vue
<script setup lang="ts">
import type { TabsItem } from '@antdv-next/mobile'
import { ref } from 'vue'

const items: TabsItem[] = ['For you', 'Trending', 'Tech', 'Finance', 'Sports', 'Fun', 'Autos', 'Military', 'World', 'Games'].map((label, index) => ({
  key: index,
  label,
  content: `${label} channel content`,
}))

const activeKey = ref<string | number>(2)
</script>

<template>
  <am-tabs v-model:active-key="activeKey" :items="items" :styles="{ content: { padding: '16px' } }" />
</template>
```
