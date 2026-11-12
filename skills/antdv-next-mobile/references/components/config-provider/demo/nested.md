# Nested theme

`ConfigProvider` can be nested; the inner one inherits the outer theme and only overrides the differences.

## Source

```vue
<template>
  <am-config-provider :theme="{ token: { colorPrimary: '#00b96b' } }">
    <am-flex vertical gap="small">
      <am-button type="primary" block>
        Outer: green theme
      </am-button>
      <am-config-provider :theme="{ token: { colorPrimary: '#722ed1' } }">
        <am-button type="primary" block>
          Inner: purple theme
        </am-button>
      </am-config-provider>
      <am-config-provider :theme="{ token: { borderRadius: 20 } }">
        <am-button type="primary" block>
          Inner: inherits green, radius only
        </am-button>
      </am-config-provider>
    </am-flex>
  </am-config-provider>
</template>
```
