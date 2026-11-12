# Hairlines and square items

`bordered` shows the hairlines between the items and `square` keeps every item square.

## Source

```vue
<script setup lang="ts">
import { PictureOutlined } from '@antdv-next/icons'
</script>

<template>
  <am-grid :columns="3" bordered square>
    <am-grid-item v-for="i in 6" :key="i" :title="`Item ${i}`">
      <template #icon>
        <PictureOutlined />
      </template>
    </am-grid-item>
  </am-grid>
</template>
```
