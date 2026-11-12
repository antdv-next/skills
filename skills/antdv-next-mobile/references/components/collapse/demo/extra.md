# Extra content and hidden arrow

`extra` shows extra content on the right side of the title, `showArrow: false` hides the expand icon, and `expandIconPlacement="start"` puts the icon on the left.

## Source

```vue
<script setup lang="ts">
import type { CollapseItemType } from '@antdv-next/mobile'

const items: CollapseItemType[] = [
  { key: '1', label: 'Order', extra: '3 items', content: 'Order No. 2024061200001' },
  { key: '2', label: 'Delivery', extra: 'Delivered', content: 'Recipient: John Brown, Xihu District, Hangzhou, Zhejiang' },
  { key: '3', label: 'Panel without arrow', showArrow: false, content: 'Tapping the header still expands and collapses it.' },
]
</script>

<template>
  <am-collapse :items="items" expand-icon-placement="start" />
</template>
```
