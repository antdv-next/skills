# Three sizes

Three sizes: `large` (48px), `middle` (40px, default) and `small` (30px). The font size is never smaller than 16px, to avoid the page zooming on focus in iOS.

## Source

```vue
<template>
  <am-flex vertical gap="small">
    <am-input size="large" placeholder="large" />
    <am-input placeholder="middle" />
    <am-input size="small" placeholder="small" />
  </am-flex>
</template>
```
