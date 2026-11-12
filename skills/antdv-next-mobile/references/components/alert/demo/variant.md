# Outlined variant

`variant="outlined"` removes the light background and keeps the border only, which suits cards with a colored background.

## Source

```vue
<template>
  <am-flex vertical gap="small">
    <am-alert variant="outlined" title="Success Text" type="success" show-icon />
    <am-alert variant="outlined" title="Info Text" type="info" show-icon />
    <am-alert
      variant="outlined"
      title="Warning Text"
      description="Further details about this warning."
      type="warning"
      show-icon
    />
  </am-flex>
</template>
```
