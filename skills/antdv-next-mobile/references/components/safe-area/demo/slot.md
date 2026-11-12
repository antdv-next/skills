# Wrap content

You can also put content into the default slot. The safe area is added as padding outside the content, saving one level of markup.

## Source

```vue
<template>
  <am-safe-area position="bottom" class="footer">
    <div class="footer-inner">
      <am-button type="primary" block>
        OK
      </am-button>
    </div>
  </am-safe-area>
</template>

<style scoped>
.footer {
  background: var(--am-color-bg-container);
  border-top: 1px solid var(--am-color-split);
}

.footer-inner {
  padding: 12px 16px;
}
</style>
```
