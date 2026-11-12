# Button size

Three sizes are provided: large, middle and small, with middle as the default. The size can also be set globally with `componentSize` of `ConfigProvider`.

## Source

```vue
<template>
  <am-flex gap="small" align="center" wrap>
    <am-button type="primary" size="large">
      Large
    </am-button>
    <am-button type="primary">
      Middle
    </am-button>
    <am-button type="primary" size="small">
      Small
    </am-button>
  </am-flex>
</template>
```
