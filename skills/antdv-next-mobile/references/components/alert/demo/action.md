# Action

Custom actions can be placed on the right side.

## Source

```vue
<template>
  <am-flex vertical gap="small">
    <am-alert title="New version available" type="info" show-icon>
      <template #action>
        <am-button size="small" type="link">
          Update
        </am-button>
      </template>
    </am-alert>
    <am-alert
      title="Network error"
      description="Please check your network settings or try again later."
      type="error"
      show-icon
      closable
    >
      <template #action>
        <am-button size="small" danger>
          Retry
        </am-button>
      </template>
    </am-alert>
  </am-flex>
</template>
```
