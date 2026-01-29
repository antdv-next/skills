# Hooks 配置

## Description (zh-CN)

对 `message`、`notification` 进行配置。。

## Source

```vue
<script setup lang="ts">
import MyPage2 from './myPage2.vue'
</script>

<template>
  <a-app :message="{ maxCount: 1 }" :notification="{ placement: 'bottomLeft' }">
    <MyPage2 />
  </a-app>
</template>
```
