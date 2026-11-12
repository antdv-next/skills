# Button / Avatar / Input / Image

Skeleton button, avatar, input and image, which can be freely combined into a placeholder for any page.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const active = ref(true)
</script>

<template>
  <am-flex vertical gap="middle">
    <am-flex gap="small" align="center" wrap>
      <am-skeleton-button :active="active" />
      <am-skeleton-button :active="active" shape="round" />
      <am-skeleton-button :active="active" shape="circle" />
      <am-skeleton-avatar :active="active" />
      <am-skeleton-avatar :active="active" shape="square" />
    </am-flex>
    <am-skeleton-input :active="active" block />
    <am-skeleton-button :active="active" block size="large" />
    <am-flex gap="small">
      <am-skeleton-image :active="active" />
      <am-skeleton-image :active="active" :size="[160, 96]" />
    </am-flex>
    <am-flex align="center" justify="space-between">
      <span>Active</span>
      <am-switch v-model:checked="active" />
    </am-flex>
  </am-flex>
</template>
```
