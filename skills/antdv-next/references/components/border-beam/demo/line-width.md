# Line Width

## Description (en-US)

Use `lineWidth` to adjust the beam width of an individual BorderBeam. The default value is `1px`, and numbers are treated as pixels.

## Source

```vue
<template>
  <div :style="{ width: '360px' }">
    <a-border-beam :line-width="2">
      <a-card title="Custom line width" style="border-width: 2px">
        Set lineWidth to match the border width of this container.
      </a-card>
    </a-border-beam>
  </div>
</template>
```
