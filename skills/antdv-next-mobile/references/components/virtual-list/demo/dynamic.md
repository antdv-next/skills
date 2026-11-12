# Dynamic height

Without `fixed`, the item height is determined by the content: `itemHeight` is only an estimate before rendering, the actual height is measured and cached after rendering, and it is updated automatically when the content changes (e.g. expand / collapse).

## Source

```vue
<script setup lang="ts">
import { reactive } from 'vue'

const sentence = 'The virtual list only renders the items near the visible area. '
const data = reactive(
  Array.from({ length: 3000 }, (_, index) => ({
    id: index,
    title: `Item ${index + 1}`,
    content: sentence.repeat((index % 5) + 1),
    expanded: false,
  })),
)
</script>

<template>
  <am-virtual-list :data="data" :height="360" :item-height="72" item-key="id" class="demo-list">
    <template #default="{ item }">
      <div class="demo-card" @click="item.expanded = !item.expanded">
        <div class="demo-card-title">
          {{ item.title }}
          <am-tag v-if="item.expanded" color="processing">
            Expanded
          </am-tag>
        </div>
        <div class="demo-card-content">
          {{ item.content }}
        </div>
        <div v-if="item.expanded" class="demo-card-extra">
          Tap to collapse. After the height changes, the following items are repositioned automatically.
        </div>
      </div>
    </template>
  </am-virtual-list>
</template>

<style scoped>
.demo-list {
  background: var(--am-color-bg-layout);
}

.demo-card {
  margin: 8px 12px;
  padding: 12px;
  color: var(--am-color-text);
  font-size: 14px;
  line-height: 1.6;
  background: var(--am-color-bg-container);
  border-radius: var(--am-border-radius-lg);
}

.demo-card-title {
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 600;
}

.demo-card-content {
  color: var(--am-color-text-secondary);
}

.demo-card-extra {
  margin-top: 8px;
  padding: 8px;
  color: var(--am-color-text-tertiary);
  background: var(--am-color-fill-tertiary);
  border-radius: var(--am-border-radius);
}
</style>
```
