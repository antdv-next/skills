# Custom indicator

Use the `indicator` slot or prop to customize the indicator.

## Source

```vue
<script setup lang="ts">
import { LoadingOutlined, SyncOutlined } from '@antdv-next/icons'
import { h } from 'vue'
</script>

<template>
  <am-flex gap="large" align="center">
    <am-spin>
      <template #indicator>
        <LoadingOutlined class="am-spin-icon" />
      </template>
    </am-spin>
    <am-spin size="large" :indicator="() => h(SyncOutlined, { class: 'am-spin-icon' })" />
    <am-spin class="custom-color" description="Custom color" />
  </am-flex>
</template>

<style scoped>
.custom-color {
  --am-spin-color: var(--am-color-success);
  --am-spin-description-color: var(--am-color-success);
}
</style>
```
