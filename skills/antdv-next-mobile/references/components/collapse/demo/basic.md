# Basic usage

Configure the panels through `items`; more than one panel can be expanded at the same time. `defaultActiveKey` sets the initially expanded panels.

## Source

```vue
<script setup lang="ts">
import type { CollapseItemType } from '@antdv-next/mobile'

const text = 'A collapse groups and hides complex areas to keep the page clean. Tap a header to expand or collapse its content.'

const items: CollapseItemType[] = [
  { key: '1', label: 'Panel 1', content: text },
  { key: '2', label: 'Panel 2', content: text },
  { key: '3', label: 'Panel 3', content: text },
]
</script>

<template>
  <am-collapse :items="items" :default-active-key="['1']" />
</template>
```
