# Custom style

Set the row height with `height`, and customize the color, font size, gap and the width, background and radius of every item with CSS variables.

## Source

```vue
<template>
  <am-flex vertical gap="middle" align="flex-start">
    <am-rolling-text class="blocks" :value="12345" :height="54" />
    <am-rolling-text class="dark" :value="2026" :from="1970" :height="36" direction="up" />
  </am-flex>
</template>

<style scoped>
.blocks {
  --am-rolling-text-color: var(--am-color-text-light-solid);
  --am-rolling-text-font-size: 28px;
  --am-rolling-text-gap: 6px;
  --am-rolling-text-item-width: 40px;
  --am-rolling-text-item-background: var(--am-color-primary);
  --am-rolling-text-item-border-radius: 8px;
}

.dark {
  --am-rolling-text-color: var(--am-color-primary);
  --am-rolling-text-font-size: 20px;
  --am-rolling-text-gap: 2px;
  --am-rolling-text-item-width: 24px;
  --am-rolling-text-item-background: var(--am-color-fill-secondary);
  --am-rolling-text-item-border-radius: 4px;
}
</style>
```
