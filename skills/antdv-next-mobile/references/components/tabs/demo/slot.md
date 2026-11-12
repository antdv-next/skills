# Custom render

Customize the tab titles and content with the `labelRender` and `contentRender` slots; `animated` enables sliding between content panes, and the component tokens can adjust the ink bar.

## Source

```vue
<script setup lang="ts">
import type { TabsItem } from '@antdv-next/mobile'

interface Channel extends TabsItem {
  count: number
}

const items: Channel[] = [
  { key: 'unread', label: 'Unread', count: 12 },
  { key: 'read', label: 'Read', count: 128 },
  { key: 'archived', label: 'Archived', count: 0 },
]
</script>

<template>
  <am-tabs class="custom-tabs" :items="items" animated>
    <template #labelRender="{ item }">
      {{ item.label }}
      <span v-if="(item as Channel).count" class="count">{{ (item as Channel).count }}</span>
    </template>
    <template #contentRender="{ item, index }">
      <div class="pane">
        Tab {{ index + 1 }}: {{ item.label }} ({{ (item as Channel).count }} items)
      </div>
    </template>
  </am-tabs>
</template>

<style scoped>
.custom-tabs {
  --am-tabs-ink-bar-width: 40px;
  --am-tabs-ink-bar-height: 3px;
  --am-tabs-active-color: #722ed1;
  --am-tabs-ink-bar-color: #722ed1;
}

.count {
  margin-inline-start: 4px;
  padding: 0 6px;
  color: var(--am-color-text-secondary);
  font-size: 12px;
  background: var(--am-color-fill-secondary);
  border-radius: 10px;
}

.pane {
  padding: 24px 16px;
  color: var(--am-color-text-secondary);
}
</style>
```
