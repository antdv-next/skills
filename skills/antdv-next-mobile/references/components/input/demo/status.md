# Status

`status` sets the validation status (inside `FormItem` it follows the validation result automatically), along with the disabled and read-only states.

## Source

```vue
<template>
  <am-flex vertical gap="small">
    <am-input status="error" default-value="Error" />
    <am-input status="warning" default-value="Warning" />
    <am-input variant="filled" status="error" default-value="Filled error" />
    <am-input disabled default-value="Disabled" />
    <am-input read-only default-value="Read only" />
  </am-flex>
</template>
```
