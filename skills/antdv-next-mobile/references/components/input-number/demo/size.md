# Sizes and variants

Three sizes and four variants. `borderless` is used by default inside a `Form`.

## Source

```vue
<template>
  <am-flex vertical gap="middle">
    <am-flex align="center" gap="middle" wrap>
      <am-input-number size="small" :default-value="1" />
      <am-input-number :default-value="1" />
      <am-input-number size="large" :default-value="1" />
    </am-flex>
    <am-flex align="center" gap="middle" wrap>
      <am-input-number variant="outlined" :default-value="1" />
      <am-input-number variant="filled" :default-value="1" />
      <am-input-number variant="underlined" :default-value="1" />
    </am-flex>
  </am-flex>
</template>
```
