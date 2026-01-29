# debug-routes

## Source

```vue
<script setup lang="ts">
const items = [
  {
    path: '/home',
    title: 'Home',
  },
  {
    path: '/user',
    title: 'User',
    menu: {
      items: [
        {
          path: '/user1',
          title: 'User1',
        },
        {
          path: '/user2',
          title: 'User2',
        },
      ],
    },
  },
]
</script>

<template>
  <a-breadcrumb :items="items" />
</template>
```
