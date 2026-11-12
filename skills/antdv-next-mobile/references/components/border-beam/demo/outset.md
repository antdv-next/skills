# Outset

`outset` is how far the beam layer sits outside the padding box of the container. By default it is the border width of the container, so the beam covers the border; it is `0` automatically when the container clips its overflow (e.g. Card). Here it pushes the beam 4px outwards as a floating ring; non-uniform radii work as well.

## Source

```vue
<template>
  <am-flex vertical gap="large">
    <am-border-beam :outset="4" :line-width="2">
      <div class="panel">
        The beam floats 4px outside this panel.
      </div>
    </am-border-beam>
    <am-border-beam :outset="0">
      <div class="panel sheet">
        Outset 0 keeps the beam inside a clipped container with non-uniform corners.
      </div>
    </am-border-beam>
  </am-flex>
</template>

<style scoped>
.panel {
  position: relative;
  padding: 20px;
  color: var(--am-color-text);
  font-size: var(--am-font-size);
  line-height: var(--am-line-height);
  background: var(--am-color-bg-container);
  border: 1px solid var(--am-color-border-secondary);
  border-radius: 12px;
}

.sheet {
  overflow: hidden;
  border-radius: 20px 20px 0 0;
}
</style>
```
