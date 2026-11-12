# Badge

Show a badge count or a red dot through `badge`, with support for capping by `overflowCount` and a custom color.

## Source

```vue
<script setup lang="ts">
import { BellOutlined, ShoppingCartOutlined } from '@antdv-next/icons'

const abs = { position: 'absolute' } as const
</script>

<template>
  <div class="demo-box">
    <am-float-button :badge="{ dot: true }" :style="{ ...abs, insetInlineEnd: '204px' }">
      <template #icon>
        <BellOutlined />
      </template>
    </am-float-button>
    <am-float-button :badge="{ count: 5 }" :style="{ ...abs, insetInlineEnd: '144px' }">
      <template #icon>
        <ShoppingCartOutlined />
      </template>
    </am-float-button>
    <am-float-button shape="square" :badge="{ count: 120, overflowCount: 99 }" :style="{ ...abs, insetInlineEnd: '84px' }" />
    <am-float-button
      shape="square"
      type="primary"
      :badge="{ count: 'new', color: 'var(--am-color-success)' }"
      :style="abs"
    />
  </div>
</template>

<style scoped>
.demo-box {
  position: relative;
  height: 120px;
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
