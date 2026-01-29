# 控制 ToolTip 的显示

## Description (zh-CN)

当 `tooltip.open` 为 `true` 时，将始终显示 ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(30)
</script>

<template>
  <a-slider v-model:value="value" :tooltip="{ open: true }" />
</template>
```
