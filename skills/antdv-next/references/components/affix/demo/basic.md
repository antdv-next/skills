# 基本

## Description (zh-CN)

最简单的用法。

## Source

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const top = ref(100)
const bottom = ref(100)
</script>

<template>
  <a-affix :offset-top="top">
    <a-button type="primary" @click="() => top = top + 10">
      Affix top
    </a-button>
  </a-affix>
  <br>
  <a-affix :offset-bottom="bottom">
    <a-button type="primary" @click="() => bottom = bottom + 10">
      Affix bottom
    </a-button>
  </a-affix>
</template>
```
