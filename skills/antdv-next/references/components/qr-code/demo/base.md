# 基本使用

## Description (zh-CN)

基本用法。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const text = ref('https://www.antdv-next.com')
</script>

<template>
  <a-space direction="vertical" align="center">
    <a-qrcode :value="text || '-'" />
    <a-input v-model:value="text" placeholder="-" :maxlength="60" />
  </a-space>
</template>
```
