# Fallback on load error

When the image fails to load, the `error` event is triggered and the avatar falls back to `icon`, then to the characters in the default slot.

## Source

```vue
<script setup lang="ts">
import { UserOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const failed = ref(0)
</script>

<template>
  <am-space vertical size="middle">
    <am-space size="middle">
      <am-avatar src="https://example.invalid/broken.png" @error="failed++">
        <template #icon>
          <UserOutlined />
        </template>
      </am-avatar>
      <am-avatar src="https://example.invalid/broken.png" @error="failed++">
        Lee
      </am-avatar>
    </am-space>
    <span class="tip">Load failures: {{ failed }}</span>
  </am-space>
</template>

<style scoped>
.tip {
  color: var(--am-color-text-secondary);
  font-size: var(--am-font-size-sm);
}
</style>
```
