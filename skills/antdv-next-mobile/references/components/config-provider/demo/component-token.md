# Component token

Use `theme.components` to adjust a single kind of component only, corresponding to the "Design Token" section of each component doc.

## Source

```vue
<template>
  <am-config-provider
    :theme="{
      components: {
        Button: { height: 52, borderRadius: 26, fontSize: 18, fontWeight: 600 },
      },
    }"
  >
    <am-button type="primary" block>
      Taller and rounder button
    </am-button>
  </am-config-provider>
</template>
```
