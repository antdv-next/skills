# Grouping and sticky headers

`group.key` derives the group key of an item; items with the same key form one group. The header is rendered by `group.title` or the `groupTitle` slot. With `sticky`, the header of the current group stays at the top while scrolling and is pushed out by the next one. The props of the `itemRender` slot are the item itself.

## Source

```vue
<script setup lang="ts">
import type { ListyGroup } from '@antdv-next/mobile'

interface Contact {
  id: number
  name: string
}

const names = [
  'Aaron Baker',
  'Alice Adams',
  'Amy Brooks',
  'Bella Carter',
  'Brian Diaz',
  'Chloe Evans',
  'Colin Foster',
  'Daisy Garcia',
  'David Hayes',
  'Elena Ingram',
  'Eric Jensen',
  'Fiona Kim',
  'Frank Lopez',
  'Grace Miller',
  'Gavin Nguyen',
  'Hannah Ortiz',
  'Henry Parker',
  'Iris Quincy',
  'Ivan Reed',
  'Jack Smith',
  'Julia Turner',
]

const contacts: Contact[] = names.map((name, id) => ({ id, name }))

const group: ListyGroup = {
  key: (contact: Contact) => contact.name.charAt(0),
}

const colors = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', '#87d068']
const colorOf = (name: string) => colors[(name.charCodeAt(0) - 65) % colors.length]
</script>

<template>
  <am-listy :items="contacts" row-key="id" :height="360" :group="group" sticky>
    <template #groupTitle="{ groupKey, items }">
      {{ groupKey }} · {{ items.length }}
    </template>
    <template #itemRender="item">
      <am-flex gap="small" align="center">
        <am-avatar :style="{ backgroundColor: colorOf(item.name) }">
          {{ item.name[0] }}
        </am-avatar>
        <span>{{ item.name }}</span>
      </am-flex>
    </template>
  </am-listy>
</template>
```
