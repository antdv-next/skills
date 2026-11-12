# Space size

Set the spacing with `size`: presets, numbers (px), CSS lengths and a `[horizontal, vertical]` array are supported.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const sizes = ['small', 'middle', 'large', 32] as const
const size = ref<(typeof sizes)[number]>('small')
</script>

<template>
  <am-space vertical size="middle">
    <am-space wrap>
      <am-checkable-tag
        v-for="item in sizes"
        :key="item"
        :checked="size === item"
        @change="size = item"
      >
        {{ item }}
      </am-checkable-tag>
    </am-space>
    <am-space :size="size">
      <am-button type="primary">
        Primary
      </am-button>
      <am-button>Default</am-button>
      <am-button type="dashed">
        Dashed
      </am-button>
    </am-space>
  </am-space>
</template>
```
