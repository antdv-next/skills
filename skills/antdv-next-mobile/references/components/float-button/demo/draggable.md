# Dragging and magnetic snapping

With `draggable` enabled, the button can be pressed and dragged. `axis` restricts the drag direction, `magnetic` makes the button snap to the nearest edge after release, and `v-model:offset` reads or sets the position. `click` is not triggered at the end of a drag.

## Source

```vue
<script setup lang="ts">
import type { FloatButtonOffset } from '@antdv-next/mobile'
import { CustomerServiceOutlined, DragOutlined } from '@antdv-next/icons'
import { message } from '@antdv-next/mobile'
import { ref } from 'vue'

const offset = ref<FloatButtonOffset>()
const abs = { position: 'absolute' } as const
</script>

<template>
  <div class="demo-box">
    <p class="tip">
      The blue button drags freely and snaps to the left or right edge; the white one only moves vertically.
    </p>
    <p class="tip">
      offset: {{ offset ? `${Math.round(offset.x)}, ${Math.round(offset.y)}` : 'not dragged' }}
    </p>
    <am-float-button
      v-model:offset="offset"
      draggable
      magnetic="x"
      type="primary"
      :gap="12"
      :style="abs"
      @click="message.info('Button clicked')"
    >
      <template #icon>
        <CustomerServiceOutlined />
      </template>
    </am-float-button>
    <am-float-button
      draggable
      axis="y"
      :gap="12"
      :style="{ ...abs, insetInlineEnd: 'auto', insetInlineStart: '12px' }"
    >
      <template #icon>
        <DragOutlined />
      </template>
    </am-float-button>
  </div>
</template>

<style scoped>
.demo-box {
  position: relative;
  height: 320px;
  overflow: hidden;
  background: var(--am-color-fill-quaternary);
  border-radius: var(--am-border-radius);
}

.tip {
  margin: 0;
  padding: 12px 12px 0;
  color: var(--am-color-text-secondary);
}

/* The component variables are declared on the root of the float button (group), so override them on that element */
.demo-box > .am-float-button,
.demo-box > .am-float-button-group {
  --am-float-button-inset-inline-end: 12px;
  --am-float-button-inset-block-end: 12px;
}
</style>
```
