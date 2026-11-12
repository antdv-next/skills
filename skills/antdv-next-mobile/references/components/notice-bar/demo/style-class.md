# Custom style

Override the `--am-notice-bar-*` component variables to customize the colors and sizes.

## Source

```vue
<template>
  <am-notice-bar
    class="custom-notice"
    shape="rounded"
    :bordered="false"
    content="A notice bar with a custom theme color"
    :styles="{ content: { fontWeight: 600 } }"
  />
</template>

<style scoped>
.custom-notice {
  --am-notice-bar-color: var(--am-color-white);
  --am-notice-bar-bg: linear-gradient(90deg, #7a5cff, #1677ff);
  --am-notice-bar-height: 36px;
  --am-notice-bar-padding-inline: 16px;
}
</style>
```
