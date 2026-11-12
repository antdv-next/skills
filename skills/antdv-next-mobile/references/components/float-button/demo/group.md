# Float button group

Use `FloatButton.Group` (`<am-float-button-group>`) to group multiple buttons together. `shape` applies to all buttons in the group, and a square button group is merged into a single card.

## Source

```vue
<script setup lang="ts">
import { CommentOutlined, CustomerServiceOutlined, QuestionCircleOutlined } from '@antdv-next/icons'

const abs = { position: 'absolute' } as const
</script>

<template>
  <div class="demo-box">
    <am-float-button-group :style="{ ...abs, insetInlineEnd: '96px' }">
      <am-float-button>
        <template #icon>
          <QuestionCircleOutlined />
        </template>
      </am-float-button>
      <am-float-button :badge="{ count: 3 }">
        <template #icon>
          <CommentOutlined />
        </template>
      </am-float-button>
      <am-float-button type="primary">
        <template #icon>
          <CustomerServiceOutlined />
        </template>
      </am-float-button>
    </am-float-button-group>
    <am-float-button-group shape="square" :style="abs">
      <am-float-button>
        <template #icon>
          <QuestionCircleOutlined />
        </template>
      </am-float-button>
      <am-float-button content="Reply" />
      <am-float-button>
        <template #icon>
          <CustomerServiceOutlined />
        </template>
      </am-float-button>
    </am-float-button-group>
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

/* The component variables are declared on the root of the float button (group), so override them on that element */
.demo-box > .am-float-button,
.demo-box > .am-float-button-group {
  --am-float-button-inset-block-end: 24px;
}
</style>
```
