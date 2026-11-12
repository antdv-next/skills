# Inside a list

Wrap each item of a list. After one item is opened, touching anywhere else closes it automatically; vertical scrolling is not affected.

## Source

```vue
<script setup lang="ts">
import type { SwipeActionItem } from '@antdv-next/mobile'
import { ref } from 'vue'

const list = ref([
  { id: 1, title: 'Weekly report submitted', time: '09:30' },
  { id: 2, title: 'Design review', time: '10:00' },
  { id: 3, title: 'Release 1.0', time: '14:00' },
  { id: 4, title: 'Team dinner', time: '18:30' },
])

const rightActions: SwipeActionItem[] = [
  { key: 'top', text: 'Pin', color: 'primary' },
  { key: 'delete', text: 'Delete', color: 'danger' },
]

function onAction(action: SwipeActionItem, id: number) {
  const index = list.value.findIndex(item => item.id === id)
  if (index < 0)
    return
  if (action.key === 'delete')
    list.value.splice(index, 1)
  else
    list.value.unshift(...list.value.splice(index, 1))
}
</script>

<template>
  <am-list>
    <am-swipe-action
      v-for="item in list"
      :key="item.id"
      :right-actions="rightActions"
      @action="(action: SwipeActionItem) => onAction(action, item.id)"
    >
      <am-list-item :title="item.title" :extra="item.time" />
    </am-swipe-action>
  </am-list>
</template>
```
