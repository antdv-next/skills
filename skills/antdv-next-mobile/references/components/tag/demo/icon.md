# Icon

Place an icon inside the tag with the `icon` prop or the same-named slot.

## Source

```vue
<script setup lang="ts">
import { EnvironmentOutlined, FireFilled, GithubOutlined, StarFilled } from '@antdv-next/icons'
import { h } from 'vue'
</script>

<template>
  <am-space wrap>
    <am-tag :icon="h(GithubOutlined)">
      GitHub
    </am-tag>
    <am-tag color="volcano" :icon="h(FireFilled)">
      Hot
    </am-tag>
    <am-tag color="gold">
      <template #icon>
        <StarFilled />
      </template>
      4.9
    </am-tag>
    <am-tag color="blue" round>
      <template #icon>
        <EnvironmentOutlined />
      </template>
      Hangzhou
    </am-tag>
  </am-space>
</template>
```
