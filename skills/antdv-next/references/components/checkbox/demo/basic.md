# 基本用法

## Description (zh-CN)

简单的 checkbox。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const checked = shallowRef(false)
</script>

<template>
  <a-checkbox v-model:checked="checked">
    Checkbox
  </a-checkbox>
</template>
```
