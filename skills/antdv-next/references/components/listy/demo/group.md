# Grouping and sticky headers

## Description (en-US)

Use `group` to derive a group key from each item and render group headers. With `sticky` enabled, the current group header sticks to the top while scrolling.

## Source

```vue
<script setup lang="ts">
interface Contact {
  id: number
  name: string
}

const names = [
  'Aaron Baker',
  'Alice Adams',
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

const contacts = names.map<Contact>((name, id) => ({ id, name }))

const colors = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', '#87d068']

const colorOf = (letter: string) => colors[(letter.charCodeAt(0) - 65) % colors.length]
</script>

<template>
  <a-listy
    :items="contacts"
    :row-key="(item: Contact) => item.id"
    :height="400"
    :group="{
      key: (contact: Contact) => contact.name.charAt(0),
      title: (letter) => letter,
    }"
    sticky
  >
    <template #itemRender="item">
      <a-flex gap="small" align="center">
        <a-avatar :style="{ backgroundColor: colorOf(item.name[0]) }">
          {{ item.name[0] }}
        </a-avatar>
        <a-typography-text>
          {{ item.name }}
        </a-typography-text>
      </a-flex>
    </template>
  </a-listy>
</template>
```
