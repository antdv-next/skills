# Semantic class names and component tokens

Customize the semantic structure through `classes` / `styles`, or override the `--am-card-*` component tokens to adjust the border radius, padding and background.

## Source

```vue
<template>
  <am-space vertical block size="middle">
    <am-card
      title="Semantic styles"
      extra="styles"
      :styles="{
        header: { borderBottom: 0 },
        title: { color: 'var(--am-color-primary)' },
        body: { paddingTop: 0 },
      }"
    >
      Removes the header divider and tightens the body.
    </am-card>
    <am-card title="Component tokens" class="brand-card" variant="borderless">
      Override CSS variables for a brand-colored card.
    </am-card>
  </am-space>
</template>

<style scoped>
.brand-card {
  --am-card-bg: var(--am-color-primary-bg);
  --am-card-border-color: var(--am-color-primary-border);
  --am-card-border-radius: 20px;
  --am-card-padding: 20px;
}
</style>
```
