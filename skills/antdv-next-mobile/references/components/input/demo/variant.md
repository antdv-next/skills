# Variants

`variant` supports four variants: `outlined`, `filled`, `borderless` and `underlined`. `borderless` is used by default inside `Form`.

## Source

```vue
<template>
  <am-flex vertical gap="small">
    <am-input placeholder="outlined (default)" />
    <am-input variant="filled" placeholder="filled" />
    <am-input variant="underlined" placeholder="underlined" />
    <am-input variant="borderless" placeholder="borderless" />
  </am-flex>
</template>
```
