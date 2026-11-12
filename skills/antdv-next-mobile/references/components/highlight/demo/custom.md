# Custom style

Customize the highlight with CSS variables or `highlightClass`, and change the tag with `highlightTag`. The `highlight` slot takes full control of how each match is rendered.

## Source

```vue
<script setup lang="ts">
const content = 'Free shipping on orders over $50. Free returns within 30 days.'
</script>

<template>
  <am-flex vertical gap="middle">
    <am-highlight class="marker" :content="content" :keywords="['free', '$50']" />
    <am-highlight :content="content" keywords="free" highlight-tag="strong" highlight-class="underline" />
    <am-highlight :content="content" :keywords="['shipping', 'returns']">
      <template #highlight="{ text, index }">
        <sup class="order">{{ index + 1 }}</sup>{{ text }}
      </template>
    </am-highlight>
  </am-flex>
</template>

<style scoped>
.marker {
  --am-highlight-color: var(--am-color-text);
  --am-highlight-background: var(--am-color-warning-bg);
  --am-highlight-font-weight: 600;
  --am-highlight-padding-inline: 2px;
  --am-highlight-border-radius: 4px;
}

.underline {
  --am-highlight-color: var(--am-color-error);

  text-decoration: underline;
  text-underline-offset: 3px;
}

.order {
  margin-inline-end: 1px;
  font-size: 10px;
}
</style>
```
