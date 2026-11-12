# Disabled

`disabled` disables the whole component; `disabled` can also be set on individual options.

## Source

```vue
<script setup lang="ts">
const options = [
  { label: 'WeChat', value: 'wechat' },
  { label: 'Alipay', value: 'alipay' },
  { label: 'Card', value: 'card', disabled: true },
]
</script>

<template>
  <am-flex vertical gap="middle">
    <am-segmented block :options="options" />
    <am-segmented block disabled :options="options" />
  </am-flex>
</template>
```
