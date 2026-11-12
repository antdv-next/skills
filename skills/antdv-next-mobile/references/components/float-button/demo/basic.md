# Basic usage

The simplest usage. The float button is fixed at the bottom right corner of the screen by default; here it is placed in a relatively positioned container for demonstration.

## Source

```vue
<script setup lang="ts">
import { message } from '@antdv-next/mobile'
</script>

<template>
  <div class="demo-box">
    <am-float-button :style="{ position: 'absolute' }" @click="message.info('Float button clicked')" />
  </div>
</template>

<style scoped>
.demo-box {
  position: relative;
  height: 160px;
  overflow: hidden;
  background: var(--am-color-fill-quaternary);
  border-radius: var(--am-border-radius);
}

/* The component variables are declared on the root of the float button (group), so override them on that element */
.demo-box > .am-float-button,
.demo-box > .am-float-button-group {
  --am-float-button-inset-block-end: 24px;
}
</style>
```
