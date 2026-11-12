# Borderless

A borderless card with `variant="borderless"` on a gray background, the most common way to group a page on mobile.

## Source

```vue
<template>
  <div class="page">
    <am-card title="Shipping address" variant="borderless">
      000 Wensan Road, Xihu District, Hangzhou, Zhejiang
    </am-card>
    <am-card title="Delivery" extra="Free shipping" variant="borderless">
      Standard delivery, arrives within 3 days
    </am-card>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  background: var(--am-color-bg-layout);
  border-radius: var(--am-border-radius);
}
</style>
```
