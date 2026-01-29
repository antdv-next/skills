# 形态变体

## Description (zh-CN)

TreeSelect 形态变体，可选 `outlined` `filled` `borderless` `underlined` 四种形态。

## Source

```vue
<script setup lang="ts">
const style = {
  width: '100%',
  maxWidth: '100%',
}
</script>

<template>
  <a-flex vertical gap="middle">
    <a-tree-select :style="style" placeholder="Please select" variant="borderless" />
    <a-tree-select :style="style" placeholder="Please select" variant="filled" />
    <a-tree-select :style="style" placeholder="Please select" variant="outlined" />
    <a-tree-select :style="style" placeholder="Please select" variant="underlined" />
  </a-flex>
</template>
```
