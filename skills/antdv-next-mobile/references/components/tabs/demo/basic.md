# Basic usage

Configure the tabs with `items`. The first tab is active by default. When there are no more than 4 tabs, they share the tab bar width equally.

## Source

```vue
<script setup lang="ts">
import type { TabsItem } from '@antdv-next/mobile'

const items: TabsItem[] = [
  { key: '1', label: 'Tab 1', content: 'Content 1' },
  { key: '2', label: 'Tab 2', content: 'Content 2' },
  { key: '3', label: 'Tab 3', content: 'Content 3' },
]
</script>

<template>
  <am-tabs :items="items" :styles="{ content: { padding: '16px' } }" />
</template>
```
