# Three types

Three types are supported: image, icon and characters. The color of icon and character avatars can be customized with `style` or the `--am-avatar-*` variables.

## Source

```vue
<script setup lang="ts">
import { UserOutlined } from '@antdv-next/icons'
import { h } from 'vue'

const src = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
</script>

<template>
  <am-space size="middle" wrap>
    <am-avatar :src="src" alt="avatar" />
    <am-avatar :icon="h(UserOutlined)" />
    <am-avatar>U</am-avatar>
    <am-avatar>USER</am-avatar>
    <am-avatar class="orange">
      U
    </am-avatar>
    <am-avatar class="green" :icon="h(UserOutlined)" />
  </am-space>
</template>

<style scoped>
.orange {
  --am-avatar-bg: var(--am-color-warning-bg);
  --am-avatar-color: var(--am-color-warning);
}

.green {
  --am-avatar-bg: var(--am-color-success);
}
</style>
```
