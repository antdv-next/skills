# Custom multiple

Override `--am-safe-area-multiple` to enlarge the reserved space by a multiple, for example when you need the same amount of breathing room again above the home indicator.

## Source

```vue
<template>
  <div class="page">
    <div class="content">
      Double bottom safe area
    </div>
    <am-safe-area position="bottom" class="double" />
  </div>
</template>

<style scoped>
.page {
  background: var(--am-color-bg-container);
}

.content {
  padding: 24px 16px;
  color: var(--am-color-text);
  font-size: var(--am-font-size);
  text-align: center;
}

.double {
  --am-safe-area-multiple: 2;

  background: var(--am-color-primary-bg);
}
</style>
```
