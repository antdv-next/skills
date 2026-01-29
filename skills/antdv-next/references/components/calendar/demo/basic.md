# 基本

## Description (zh-CN)

一个通用的日历面板，支持年/月切换。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const value = shallowRef()
</script>

<template>
  <a-calendar v-model:value="value" />
</template>
```
