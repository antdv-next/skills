# Description

An alert with an additional description.

## Source

```vue
<template>
  <am-flex vertical gap="small">
    <am-alert
      type="success"
      show-icon
      title="Payment successful"
      description="Your order has been placed and will be shipped soon. Track the delivery in My Orders."
    />
    <am-alert type="error" show-icon title="Submit failed">
      <template #description>
        Something went wrong with the network. Please check your settings and try again.
      </template>
    </am-alert>
  </am-flex>
</template>
```
