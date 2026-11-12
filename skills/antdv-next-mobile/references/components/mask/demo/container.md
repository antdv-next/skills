# Local mask

The mask is rendered in place by default. By overriding `position` it can cover only a local area, in which case `lockScroll` usually needs to be turned off.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <div class="box">
    <am-button type="primary" @click="open = true">
      Cover this area
    </am-button>
    <am-mask v-model:open="open" closable :lock-scroll="false" :style="{ position: 'absolute' }">
      <div class="tip">
        Tap the mask to close
      </div>
    </am-mask>
  </div>
</template>

<style scoped>
.box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  overflow: hidden;
  background: var(--am-color-fill-quaternary);
  border-radius: var(--am-border-radius);
}

.tip {
  margin-top: 88px;
  color: var(--am-color-white);
  text-align: center;
  pointer-events: none;
}
</style>
```
