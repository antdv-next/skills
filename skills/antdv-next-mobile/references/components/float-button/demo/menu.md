# Menu mode

Set `trigger="click"` to enter menu mode: tap the trigger button to expand / collapse. `placement` controls the direction of expansion, and `v-model:open` makes it controlled.

## Source

```vue
<script setup lang="ts">
import { CommentOutlined, CustomerServiceOutlined, PlusOutlined, ShareAltOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const open = ref(true)
const abs = { position: 'absolute' } as const
</script>

<template>
  <div class="demo-box">
    <am-float-button-group
      v-model:open="open"
      trigger="click"
      type="primary"
      :style="abs"
    >
      <template #icon>
        <PlusOutlined />
      </template>
      <am-float-button>
        <template #icon>
          <CommentOutlined />
        </template>
      </am-float-button>
      <am-float-button>
        <template #icon>
          <ShareAltOutlined />
        </template>
      </am-float-button>
    </am-float-button-group>
    <am-float-button-group
      trigger="click"
      placement="left"
      shape="square"
      :style="{ ...abs, insetInlineEnd: '96px' }"
    >
      <template #icon>
        <CustomerServiceOutlined />
      </template>
      <am-float-button content="Call" />
      <am-float-button content="Chat" />
    </am-float-button-group>
    <span class="state">open: {{ open }}</span>
  </div>
</template>

<style scoped>
.demo-box {
  position: relative;
  height: 240px;
  overflow: hidden;
  background: var(--am-color-fill-quaternary);
  border-radius: var(--am-border-radius);
}

.state {
  position: absolute;
  top: 12px;
  left: 12px;
  color: var(--am-color-text-secondary);
}

/* The component variables are declared on the root of the float button (group), so override them on that element */
.demo-box > .am-float-button,
.demo-box > .am-float-button-group {
  --am-float-button-inset-block-end: 24px;
}
</style>
```
