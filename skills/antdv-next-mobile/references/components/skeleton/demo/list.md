# List

Render a skeleton for each item while the first screen of a list is loading.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(true)
const list = [
  { title: 'System notice', description: 'Your account has been verified.' },
  { title: 'Order update', description: 'Your order has been shipped.' },
  { title: 'Promotion', description: 'Your welcome gift has arrived, tap to view.' },
]
</script>

<template>
  <div class="skeleton-list">
    <div class="skeleton-list-bar">
      <span>Loading</span>
      <am-switch v-model:checked="loading" />
    </div>
    <div v-for="item in list" :key="item.title" class="skeleton-list-item">
      <am-skeleton :loading="loading" active avatar :paragraph="{ rows: 1 }">
        <div class="skeleton-list-avatar">
          {{ item.title.slice(0, 1) }}
        </div>
        <div>
          <div class="skeleton-list-title">
            {{ item.title }}
          </div>
          <div class="skeleton-list-desc">
            {{ item.description }}
          </div>
        </div>
      </am-skeleton>
    </div>
  </div>
</template>

<style scoped>
.skeleton-list {
  background: var(--am-color-bg-container);
}

.skeleton-list-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  color: var(--am-color-text);
  font-size: var(--am-font-size);
}

.skeleton-list-item {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 12px 16px;
  border-top: 1px solid var(--am-color-split);
}

.skeleton-list-avatar {
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: var(--am-color-primary);
  font-size: var(--am-font-size-lg);
  background: var(--am-color-primary-bg);
  border-radius: 50%;
}

.skeleton-list-title {
  color: var(--am-color-text);
  font-size: var(--am-font-size-lg);
}

.skeleton-list-desc {
  margin-top: 4px;
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size);
}
</style>
```
