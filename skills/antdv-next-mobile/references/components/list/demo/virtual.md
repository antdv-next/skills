# Large data / virtual scrolling

Set `virtual` and `height` in data mode to enable virtual scrolling: with 10,000 rows only the items near the visible area are rendered, and item heights may differ (they are measured automatically after rendering). The `scrollTo` method scrolls to a given index or `rowKey`; scrolling near the bottom triggers `reachEnd`, which can be used for infinite loading.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

interface Message {
  id: number
  title: string
  description?: string
}

function create(start: number, length: number): Message[] {
  return Array.from({ length }, (_, i) => {
    const id = start + i
    return { id, title: `Message ${id + 1}`, description: id % 4 === 0 ? 'This message has a description line, so its height differs' : undefined }
  })
}

const messages = ref<Message[]>(create(0, 10000))
const loading = ref(false)
const listRef = ref<{ scrollTo: (target: number | { index?: number, key?: number, align?: 'start' | 'center' }) => void }>()

function loadMore() {
  if (loading.value)
    return
  loading.value = true
  setTimeout(() => {
    messages.value = messages.value.concat(create(messages.value.length, 50))
    loading.value = false
  }, 800)
}
</script>

<template>
  <am-list
    ref="listRef"
    :header="`${messages.length} messages`"
    :data-source="messages"
    row-key="id"
    virtual
    :height="360"
    :loading="loading"
    @reach-end="loadMore"
  >
    <template #renderItem="{ item }">
      <am-list-item :title="item.title" :description="item.description" :extra="`#${item.id + 1}`" />
    </template>
  </am-list>
  <div style="padding: 12px 16px">
    <am-flex gap="small">
      <am-button block @click="listRef?.scrollTo(0)">
        Top
      </am-button>
      <am-button block @click="listRef?.scrollTo({ index: 4999, align: 'center' })">
        No. 5000
      </am-button>
      <am-button block @click="listRef?.scrollTo({ index: messages.length - 1 })">
        Bottom
      </am-button>
    </am-flex>
  </div>
</template>
```
