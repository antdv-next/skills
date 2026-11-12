# Line width

`lineWidth` sets the width of the beam line, `1px` by default; numbers are pixels. It usually matches the border width of the container, so the beam covers the border exactly.

## Source

```vue
<template>
  <am-border-beam :line-width="2">
    <div class="panel">
      Set lineWidth to match the 2px border of this panel.
    </div>
  </am-border-beam>
</template>

<style scoped>
.panel {
  position: relative;
  padding: 20px;
  color: var(--am-color-text);
  font-size: var(--am-font-size);
  line-height: var(--am-line-height);
  background: var(--am-color-bg-container);
  border: 2px solid var(--am-color-border-secondary);
  border-radius: 12px;
}
</style>
```
