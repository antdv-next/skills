# Dynamic

The number and the red dot can change dynamically with the data.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(5)
const show = ref(true)
</script>

<template>
  <am-space vertical size="large">
    <am-space size="large" align="center">
      <am-badge :count="count">
        <div class="box" />
      </am-badge>
      <am-button size="small" @click="count = Math.max(0, count - 1)">
        -
      </am-button>
      <am-button size="small" @click="count += 1">
        +
      </am-button>
    </am-space>
    <am-space size="large" align="center">
      <am-badge :dot="show">
        <div class="box" />
      </am-badge>
      <am-button size="small" @click="show = !show">
        Toggle dot
      </am-button>
    </am-space>
  </am-space>
</template>

<style scoped>
.box {
  width: 44px;
  height: 44px;
  background: var(--am-color-fill-secondary);
  border-radius: var(--am-border-radius);
}
</style>
```
