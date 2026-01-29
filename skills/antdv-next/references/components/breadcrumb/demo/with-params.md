# with-params

## Source

```vue
<script setup lang="ts">
const items = [
  {
    title: 'Users',
  },
  {
    title: ':id',
    href: '',
  },
]
const params = { id: 1 }
</script>

<template>
  <a-breadcrumb :items="items" :params="params" />
</template>
```
