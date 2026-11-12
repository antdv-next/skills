# Four styles

There are four styles: `success`, `info`, `warning` and `error`. The default is `info`.

## Source

```vue
<template>
  <am-flex vertical gap="small">
    <am-alert title="Success Text" type="success" />
    <am-alert title="Info Text" type="info" />
    <am-alert title="Warning Text" type="warning" />
    <am-alert type="error">
      Error Text (default slot)
    </am-alert>
  </am-flex>
</template>
```
