# Horizontal scrolling

With `scrollWidth` the list scrolls horizontally when the content is wider than the container; the pinned group header scrolls horizontally with the content.

## Source

```vue
<script setup lang="ts">
import type { ListyGroup } from '@antdv-next/mobile'

interface Item {
  id: number
  name: string
  email: string
  address: string
  status: string
}

const items: Item[] = Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  name: `User ${index}`,
  email: `user.${index}@example.com`,
  address: `No. ${index} Zhongshan Road, Xihu District, Hangzhou`,
  status: index % 2 ? 'Active' : 'Inactive',
}))

const group: ListyGroup = {
  key: (item: Item) => Math.floor(item.id / 50),
  title: groupKey => `User ${Number(groupKey) * 50} - ${Number(groupKey) * 50 + 49}`,
}
</script>

<template>
  <am-listy :items="items" row-key="id" :height="320" :scroll-width="800" sticky :group="group">
    <template #itemRender="item">
      <am-flex gap="middle" align="center">
        <span :style="{ flex: '0 0 80px' }">{{ item.name }}</span>
        <span :style="{ flex: '0 0 200px' }">{{ item.email }}</span>
        <span :style="{ flex: '0 0 360px' }">{{ item.address }}</span>
        <am-tag :color="item.status === 'Active' ? 'success' : 'default'">
          {{ item.status }}
        </am-tag>
      </am-flex>
    </template>
  </am-listy>
</template>
```
