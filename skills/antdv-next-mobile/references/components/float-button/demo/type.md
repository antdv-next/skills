# Type, shape and text

Change the button type with `type`, the shape with `shape`, customize the icon with `icon`, and show text below the icon with `content`; when only `content` is set, only the text is shown. With `href` set, the button is rendered as a link.

## Source

```vue
<script setup lang="ts">
import { CustomerServiceOutlined, QuestionCircleOutlined } from '@antdv-next/icons'

const abs = { position: 'absolute' } as const
</script>

<template>
  <div class="demo-box">
    <am-float-button :style="{ ...abs, insetInlineEnd: '264px' }">
      <template #icon>
        <QuestionCircleOutlined />
      </template>
    </am-float-button>
    <am-float-button type="primary" :style="{ ...abs, insetInlineEnd: '204px' }">
      <template #icon>
        <CustomerServiceOutlined />
      </template>
    </am-float-button>
    <am-float-button shape="square" :style="{ ...abs, insetInlineEnd: '144px' }" />
    <am-float-button shape="square" type="primary" content="Chat" :style="{ ...abs, insetInlineEnd: '84px' }">
      <template #icon>
        <CustomerServiceOutlined />
      </template>
    </am-float-button>
    <am-float-button shape="square" content="Help" href="https://github.com/antdv-next" target="_blank" :style="abs" />
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
