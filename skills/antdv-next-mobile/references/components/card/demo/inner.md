# Inner card

A card with `type="inner"` is used inside another card, and its header has a light background.

## Source

```vue
<template>
  <am-card title="Order details">
    <am-space vertical block size="middle">
      <am-card type="inner" title="Package 1" extra="Delivered">
        2 items, shipped by SF Express
      </am-card>
      <am-card type="inner" title="Package 2" extra="In transit">
        1 item, arriving tomorrow
      </am-card>
    </am-space>
  </am-card>
</template>
```
