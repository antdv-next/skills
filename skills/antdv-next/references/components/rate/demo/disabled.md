# 只读

## Description (zh-CN)

只读，无法进行鼠标交互。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(2)
</script>

<template>
  <a-rate v-model:value="value" disabled />
</template>
```
