# Semantic class names and component tokens

Customize the semantic structure with `classes` / `styles`, or override the `--am-button-*` component tokens to adjust the size and border radius.

## Source

```vue
<template>
  <am-flex vertical gap="small">
    <am-button
      type="primary"
      block
      :styles="{ content: { letterSpacing: '4px', fontWeight: 600 } }"
    >
      Semantic styles
    </am-button>
    <am-button type="primary" block class="gradient-button">
      Gradient button
    </am-button>
  </am-flex>
</template>

<style scoped>
.gradient-button {
  --am-button-height: 48px;
  --am-button-border-radius: 24px;

  background: linear-gradient(135deg, #6253e1, #04befe);
  border: 0;
}
</style>
```
