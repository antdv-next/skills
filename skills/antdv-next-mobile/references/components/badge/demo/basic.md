# Basic usage

The simplest usage: put the content inside `Badge` and set the number with `count`. The badge is hidden by default when `count` is 0; use `showZero` to show it.

## Source

```vue
<template>
  <am-space size="large">
    <am-badge :count="5">
      <div class="box" />
    </am-badge>
    <am-badge :count="0" show-zero>
      <div class="box" />
    </am-badge>
    <am-badge count="new">
      <div class="box" />
    </am-badge>
    <am-badge :count="5" size="small">
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
