# Custom colors

Customize the colors and size by overriding the component CSS variables (or `theme.components.Switch` of `ConfigProvider`).

## Source

```vue
<template>
  <am-flex align="center" gap="middle">
    <am-switch default-checked style="--am-switch-color: var(--am-color-success)" />
    <am-switch default-checked style="--am-switch-color: var(--am-color-error)" />
    <am-switch
      default-checked
      style="--am-switch-height: 36px; --am-switch-handle-size: 32px; --am-switch-min-width: 64px"
    />
  </am-flex>
</template>
```
