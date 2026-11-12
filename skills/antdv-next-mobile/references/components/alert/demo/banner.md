# Banner

Displayed as a full-width banner at the top of the page, with an icon and `type` set to `warning` by default.

## Source

```vue
<template>
  <am-flex vertical gap="small">
    <am-alert banner title="Maintenance starts at 23:00 tonight" />
    <am-alert banner closable title="Weak network, some content may load slowly" type="info" />
    <am-alert banner type="error" :show-icon="false" title="Error banner without icon" />
  </am-flex>
</template>
```
