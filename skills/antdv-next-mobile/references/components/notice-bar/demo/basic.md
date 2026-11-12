# Basic usage

Set the notice content with the `content` prop or the default slot.

## Source

```vue
<template>
  <am-flex vertical gap="small">
    <am-notice-bar content="The default notice bar shows an important message" />
    <am-notice-bar>
      Content set through the default slot
    </am-notice-bar>
  </am-flex>
</template>
```
