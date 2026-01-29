# 基本

## Description (zh-CN)

最简单的用法。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <a-rate v-model:value="value" />
</template>
```
