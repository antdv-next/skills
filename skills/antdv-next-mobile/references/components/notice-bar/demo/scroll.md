# Scrolling

Content longer than one line scrolls automatically; `delay` controls how long it stays before starting and `speed` controls the speed; `scrollable` can force or disable scrolling.

## Source

```vue
<script setup lang="ts">
const text = 'The only valid measurement of code quality is how often people swear while reading it, and good code should read like well-written prose.'
</script>

<template>
  <am-flex vertical gap="small">
    <am-notice-bar :content="text" />
    <am-notice-bar :content="text" color="info" :delay="0" :speed="100" />
    <am-notice-bar content="Scrolls even when the content is short" color="success" scrollable />
    <am-notice-bar :content="text" color="default" :scrollable="false" />
  </am-flex>
</template>
```
