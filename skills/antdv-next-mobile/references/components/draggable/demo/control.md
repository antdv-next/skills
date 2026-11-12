# Controlled offset, reset and disabled

`v-model:offset` reads or sets the position, `reset()` goes back to the initial position and `disabled` turns dragging off. The default slot provides the `dragging` state.

## Source

```vue
<script setup lang="ts">
import type { DraggableOffset } from '@antdv-next/mobile'
import { ref } from 'vue'

const offset = ref<DraggableOffset>()
const disabled = ref(false)
const dragRef = ref()

function reset() {
  dragRef.value?.reset()
  offset.value = undefined
}
</script>

<template>
  <am-flex vertical gap="small">
    <am-flex gap="small" align="center">
      <am-button size="small" @click="offset = { x: 120, y: 80 }">
        Move to 120, 80
      </am-button>
      <am-button size="small" @click="reset">
        Reset
      </am-button>
      <am-switch v-model:checked="disabled" size="small" />
      <span>Disabled</span>
    </am-flex>
    <div class="demo-box">
      <p class="tip">
        offset: {{ offset ? `${Math.round(offset.x)}, ${Math.round(offset.y)}` : 'initial' }}
      </p>
      <am-draggable ref="dragRef" v-slot="{ dragging }" v-model:offset="offset" class="demo-drag" :disabled="disabled">
        <am-tag :color="dragging ? 'orange' : 'blue'">
          {{ dragging ? 'Dragging' : 'Drag me' }}
        </am-tag>
      </am-draggable>
    </div>
  </am-flex>
</template>

<style scoped>
.demo-box {
  position: relative;
  height: 220px;
  overflow: hidden;
  background: var(--am-color-fill-quaternary);
  border-radius: var(--am-border-radius);
}

.tip {
  margin: 0;
  padding: 12px;
  color: var(--am-color-text-secondary);
}

.demo-drag {
  position: absolute;
  top: 48px;
  left: 16px;
}
</style>
```
