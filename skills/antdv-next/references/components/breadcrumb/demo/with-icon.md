# with-icon

## Source

```vue
<script setup lang="ts">
import { HomeOutlined, UserOutlined } from '@antdv-next/icons'
import { h } from 'vue'

const items = [
  {
    href: '',
    title: h(HomeOutlined),
  },
  {
    href: '',
    title: h('span', {}, [h(UserOutlined), h('span', ' Application List')]),
  },
  {
    title: 'Application',
  },
]
</script>

<template>
  <a-breadcrumb :items="items" />
</template>
```
