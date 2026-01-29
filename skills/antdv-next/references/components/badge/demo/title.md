# 自定义标题

## Description (zh-CN)

设置鼠标放在状态点上时显示的文字。

## Source

```vue
<script setup lang="ts">
</script>

<template>
  <a-space size="large">
    <a-badge :count="5" title="Custom hover text">
      <a-avatar shape="square" size="large" />
    </a-badge>
    <a-badge :count="-5" title="Negative">
      <a-avatar shape="square" size="large" />
    </a-badge>
  </a-space>
</template>
```
