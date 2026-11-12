# Accordion

`accordion` mode, only one panel is expanded at a time. `v-model:activeKey` always returns an array.

## Source

```vue
<script setup lang="ts">
import type { CollapseItemType } from '@antdv-next/mobile'
import { ref } from 'vue'

const items: CollapseItemType[] = [
  { key: 'ship', label: 'When will my order ship?', content: 'Within 24 hours after payment. For pre-sale items, see the product page.' },
  { key: 'return', label: 'Can I return within 7 days?', content: 'Yes. Apply within 7 days of delivery if the item is intact and resalable.' },
  { key: 'invoice', label: 'How do I get an invoice?', content: 'Tap Request Invoice in My Orders - Order Details. The e-invoice will be sent to your email.' },
]

const activeKey = ref<(string | number)[]>(['ship'])
</script>

<template>
  <am-collapse v-model:active-key="activeKey" accordion :items="items" />
  <div class="tip">
    activeKey: {{ activeKey }}
  </div>
</template>

<style scoped>
.tip {
  padding: 12px 16px;
  color: var(--am-color-text-tertiary);
  font-size: 13px;
}
</style>
```
