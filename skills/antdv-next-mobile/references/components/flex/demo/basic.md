# Basic layout

The simplest usage: horizontal layout and vertical layout with `vertical`.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const vertical = ref(false)
</script>

<template>
  <am-flex vertical gap="middle">
    <am-flex gap="small">
      <am-button :type="vertical ? 'default' : 'primary'" size="small" @click="vertical = false">
        Horizontal
      </am-button>
      <am-button :type="vertical ? 'primary' : 'default'" size="small" @click="vertical = true">
        Vertical
      </am-button>
    </am-flex>
    <am-flex :vertical="vertical">
      <div v-for="i in 4" :key="i" class="block" :class="{ alt: i % 2 === 0 }" />
    </am-flex>
  </am-flex>
</template>

<style scoped>
.block {
  width: 25%;
  height: 48px;
  background: var(--am-color-primary);
}

.block.alt {
  background: var(--am-color-primary-border);
}
</style>
```
