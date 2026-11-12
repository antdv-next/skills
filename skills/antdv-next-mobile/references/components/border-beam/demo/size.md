# Size

`size` is the size of the visible beam segment, `100` by default; numbers are pixels. Containers are small on a phone: keep `size` clearly below twice the shorter side of the container.

## Source

```vue
<script setup lang="ts">
const sizes = [
  { name: 'Compact', size: 56, description: 'A shorter highlight for dense card groups.' },
  { name: 'Default', size: 100, description: 'The default 100px beam segment.' },
  { name: 'Extended', size: 160, description: 'A longer highlight for wide feature panels.' },
]
</script>

<template>
  <am-flex vertical gap="middle">
    <am-border-beam v-for="item in sizes" :key="item.size" :size="item.size">
      <am-card :title="item.name" :extra="`${item.size}px`">
        {{ item.description }}
      </am-card>
    </am-border-beam>
  </am-flex>
</template>
```
