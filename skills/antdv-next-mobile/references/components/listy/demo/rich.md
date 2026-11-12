# Rich content

`itemRender` can render anything and rows do not need the same height: every row is measured after it is rendered, and the scroll position and scrollbar are corrected accordingly.

## Source

```vue
<script setup lang="ts">
interface Notice {
  id: number
  user: string
  message: string
  time: string
}

const users = ['Olivia', 'Liam', 'Emma', 'Noah', 'Ava', 'Ethan', 'Sophia', 'Lucas']

const messages = [
  'commented on your merge request',
  'invited you to the quarterly planning review. Please confirm before Friday so the agenda can be finalized.',
  'mentioned you in the design review thread',
  'assigned you a task that is due next Monday. It covers the remaining accessibility issues of the latest audit.',
  'starred the report you shared yesterday',
]

const colors = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae']
const colorOf = (user: string) => colors[users.indexOf(user) % colors.length]
const pad = (value: number) => String(value).padStart(2, '0')

const notices: Notice[] = Array.from({ length: 200 }, (_, index) => ({
  id: index,
  user: users[index % users.length],
  message: messages[index % messages.length],
  time: `${pad((8 + index) % 24)}:${pad((index * 17) % 60)}`,
}))
</script>

<template>
  <am-listy :items="notices" row-key="id" :height="360">
    <template #itemRender="item">
      <am-flex gap="small" align="flex-start">
        <am-avatar :style="{ flex: 'none', backgroundColor: colorOf(item.user) }">
          {{ item.user[0] }}
        </am-avatar>
        <div class="body">
          <am-flex justify="space-between" gap="small">
            <strong>{{ item.user }}</strong>
            <span class="secondary">{{ item.time }}</span>
          </am-flex>
          <div class="secondary">
            {{ item.message }}
          </div>
        </div>
      </am-flex>
    </template>
  </am-listy>
</template>

<style scoped>
.body {
  flex: auto;
  min-width: 0;
}

.secondary {
  color: var(--am-color-text-secondary);
}
</style>
```
