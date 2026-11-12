# Avatar group

`AvatarGroup` stacks multiple avatars, `max.count` limits how many are shown and the rest are folded into `+N`; `size` and `shape` apply to all avatars in the group.

## Source

```vue
<script setup lang="ts">
import { UserOutlined } from '@antdv-next/icons'
import { h } from 'vue'

const src = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
const icon = h(UserOutlined)
</script>

<template>
  <am-space vertical size="middle">
    <am-avatar-group>
      <am-avatar :src="src" />
      <am-avatar class="orange">
        K
      </am-avatar>
      <am-avatar class="green" :icon="icon" />
      <am-avatar class="blue">
        M
      </am-avatar>
    </am-avatar-group>
    <am-avatar-group :max="{ count: 3 }">
      <am-avatar :src="src" />
      <am-avatar class="orange">
        K
      </am-avatar>
      <am-avatar class="green" :icon="icon" />
      <am-avatar class="blue">
        M
      </am-avatar>
      <am-avatar>N</am-avatar>
    </am-avatar-group>
    <am-avatar-group size="large" shape="square" :max="{ count: 2, style: { color: 'var(--am-color-primary)' } }">
      <am-avatar :src="src" />
      <am-avatar class="orange">
        K
      </am-avatar>
      <am-avatar class="green" :icon="icon" />
      <am-avatar class="blue">
        M
      </am-avatar>
    </am-avatar-group>
  </am-space>
</template>

<style scoped>
.orange {
  --am-avatar-bg: var(--am-color-warning);
}

.green {
  --am-avatar-bg: var(--am-color-success);
}

.blue {
  --am-avatar-bg: var(--am-color-primary);
}
</style>
```
