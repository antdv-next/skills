# 可关闭

## Description (zh-CN)

显示关闭按钮，点击可关闭警告提示。

## Source

```vue
<script setup lang="ts">
function onClose(e: MouseEvent) {
  console.log(e, 'I was closed.')
}
</script>

<template>
  <a-alert
    title="Warning Title"
    type="warning"
    :closable="{ 'aria-label': 'close' }"
    @close="onClose"
  />
  <br>
  <a-alert
    title="Success Title"
    type="success"
    :closable="{ 'aria-label': 'close' }"
    @close="onClose"
  />
  <br>
  <a-alert
    title="Info Title"
    type="info"
    :closable="{ 'aria-label': 'close' }"
    @close="onClose"
  />
  <br>
  <a-alert
    title="Error Title"
    type="error"
    :closable="{ 'aria-label': 'close' }"
    @close="onClose"
  />
</template>
```
