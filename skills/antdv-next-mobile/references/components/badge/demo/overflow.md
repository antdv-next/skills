# Overflow count

Displayed as `${overflowCount}+` when the count exceeds `overflowCount`, which defaults to `99`.

## Source

```vue
<template>
  <am-space size="large">
    <am-badge :count="99">
      <div class="box" />
    </am-badge>
    <am-badge :count="100">
      <div class="box" />
    </am-badge>
    <am-badge :count="99" :overflow-count="10">
      <div class="box" />
    </am-badge>
    <am-badge :count="1000" :overflow-count="999">
      <div class="box" />
    </am-badge>
  </am-space>
</template>

<style scoped>
.box {
  width: 44px;
  height: 44px;
  background: var(--am-color-fill-secondary);
  border-radius: var(--am-border-radius);
}
</style>
```
