# Custom icon

Customize the icon with the `icon` prop or the same-named slot; `--am-result-icon-color` adjusts the icon color.

## Source

```vue
<script setup lang="ts">
import { SmileOutlined } from '@antdv-next/icons'
</script>

<template>
  <am-result title="Great, all tasks are done" class="custom">
    <template #icon>
      <SmileOutlined />
    </template>
    <template #extra>
      <am-button type="primary" shape="round">
        Next
      </am-button>
    </template>
  </am-result>
</template>

<style scoped>
.custom {
  --am-result-icon-color: var(--am-color-primary);
}
</style>
```
