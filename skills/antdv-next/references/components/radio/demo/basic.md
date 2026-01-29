# 基本

## Description (zh-CN)

最简单的用法。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const val = shallowRef()
</script>

<template>
  <a-radio v-model:checked="val">
    Radio
  </a-radio>
</template>
```
