# Success

A successful result, commonly used on payment or submission completion pages.

## Source

```vue
<template>
  <am-result
    status="success"
    title="Payment successful"
    sub-title="Order No. 2024080800001, ships within 2 hours"
  >
    <template #extra>
      <am-button type="primary" block>
        View order
      </am-button>
      <am-button block>
        Back home
      </am-button>
    </template>
  </am-result>
</template>
```
