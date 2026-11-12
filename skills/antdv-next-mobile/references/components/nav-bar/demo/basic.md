# Basic usage

The most basic nav bar: a title with a back arrow. Tapping the back area triggers the `back` event.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <am-nav-bar title="Title" @back="count++" />
  <div class="tip">
    back event triggered {{ count }} times
  </div>
</template>

<style scoped>
.tip {
  padding: 12px 16px;
  color: var(--am-color-text-tertiary);
  font-size: 13px;
}
</style>
```
