# 不同的状态

## Description (zh-CN)

可以通过 `status` 的值控制二维码的状态，提供了 `active`、`expired`、`loading`、`scanned` 四个值。

## Source

```vue
<script setup lang="ts">
const value = 'https://www.antdv-next.com'
</script>

<template>
  <a-flex gap="middle" wrap>
    <a-qrcode :value="value" status="loading" />
    <a-qrcode :value="value" status="expired" @refresh="() => console.log('refresh')" />
    <a-qrcode :value="value" status="scanned" />
  </a-flex>
</template>
```
