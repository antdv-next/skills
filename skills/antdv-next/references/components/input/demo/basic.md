# 基本使用

## Description (zh-CN)

基本使用。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref()
</script>

<template>
  <a-input v-model:value="value" placeholder="Basic usage" />
</template>
```
