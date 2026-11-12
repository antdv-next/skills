# Semantic class names and component tokens

Customize the semantic structure with `styles`, or override the `--am-divider-*` component tokens to adjust the color and thickness.

## Source

```vue
<template>
  <am-divider :styles="{ content: { color: 'var(--am-color-primary)', fontWeight: 600 } }">
    Semantic styles
  </am-divider>
  <am-divider class="brand-divider" title-placement="start">
    Component tokens
  </am-divider>
</template>

<style scoped>
.brand-divider {
  --am-divider-color: var(--am-color-primary-border);
  --am-divider-line-width: 2px;
  --am-divider-text-color: var(--am-color-primary);
  --am-divider-placement-rail-width: 24px;
}
</style>
```
