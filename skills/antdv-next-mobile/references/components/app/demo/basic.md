# Basic usage

Wrap the application with `<am-app>`; components inside get the `message`, `notification`, `modal` and `toast` instances from `App.useApp()` without placing any `ContextHolder` by hand.

## Source

```vue
<script setup lang="ts">
import MyPage from './my-page.vue'
</script>

<template>
  <am-app>
    <MyPage />
  </am-app>
</template>
```
