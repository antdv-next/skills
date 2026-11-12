# Description

Add a description through the `description` prop or the same-named slot.

## Source

```vue
<template>
  <am-flex gap="large" align="center" justify="space-around">
    <am-spin size="small" description="Loading" />
    <am-spin description="Loading..." />
    <am-spin size="large">
      <template #description>
        Working on it
      </template>
    </am-spin>
  </am-flex>
</template>
```
