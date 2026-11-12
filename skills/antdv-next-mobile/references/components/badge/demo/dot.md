# Red dot

When there is no specific number, show a small red dot with `dot`.

## Source

```vue
<script setup lang="ts">
import { BellOutlined, MessageOutlined } from '@antdv-next/icons'
</script>

<template>
  <am-space size="large" align="center">
    <am-badge dot>
      <BellOutlined class="icon" />
    </am-badge>
    <am-badge dot>
      <MessageOutlined class="icon" />
    </am-badge>
    <am-badge dot>
      <span class="link">Messages</span>
    </am-badge>
  </am-space>
</template>

<style scoped>
.icon {
  color: var(--am-color-text);
  font-size: 24px;
}

.link {
  color: var(--am-color-link);
  font-size: var(--am-font-size-lg);
}
</style>
```
