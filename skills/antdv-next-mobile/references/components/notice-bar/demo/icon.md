# Custom icon

Customize the icon on the left with the `icon` prop or slot; pass `null` to hide the icon.

## Source

```vue
<script setup lang="ts">
import { CloseCircleOutlined, CompassOutlined, GiftOutlined } from '@antdv-next/icons'
import { h } from 'vue'
</script>

<template>
  <am-flex vertical gap="small">
    <am-notice-bar content="Custom icon through the slot">
      <template #icon>
        <GiftOutlined />
      </template>
    </am-notice-bar>
    <am-notice-bar color="info" content="Custom icon through the prop" :icon="() => h(CompassOutlined)" />
    <am-notice-bar color="success" content="No icon" :icon="null" />
    <am-notice-bar color="error" closable content="Custom close icon">
      <template #closeIcon>
        <CloseCircleOutlined />
      </template>
    </am-notice-bar>
  </am-flex>
</template>
```
