# Semantic class names and component tokens

Customize the semantic structure with `classes` / `styles`, or override the `--am-skeleton-*` component tokens to adjust the color and size.

## Source

```vue
<template>
  <am-flex vertical gap="large">
    <am-skeleton
      avatar
      active
      :styles="{ title: { height: '20px' }, avatar: { borderRadius: '12px' } }"
    />
    <am-skeleton active class="brand-skeleton" :paragraph="{ rows: 2 }" />
  </am-flex>
</template>

<style scoped>
.brand-skeleton {
  --am-skeleton-color: var(--am-color-primary-bg);
  --am-skeleton-color-highlight: var(--am-color-primary-bg-hover);
  --am-skeleton-paragraph-height: 12px;
  --am-skeleton-border-radius: 6px;
}
</style>
```
