# Block mode

The mobile-only `block` prop makes `Space` fit the width of its parent; when arranged vertically the children stretch as well, which suits the action area at the bottom of a page.

## Source

```vue
<template>
  <am-space vertical block size="middle">
    <am-button type="primary" block>
      Place order
    </am-button>
    <am-button block>
      Add to cart
    </am-button>
  </am-space>
</template>
```
