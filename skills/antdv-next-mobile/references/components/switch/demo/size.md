# Two sizes

`size="small"` is a small switch, suitable for compact lists or cards.

## Source

```vue
<template>
  <am-flex align="center" gap="middle">
    <am-switch default-checked />
    <am-switch size="small" default-checked />
    <am-switch size="small" checked-children="On" un-checked-children="Off" />
  </am-flex>
</template>
```
