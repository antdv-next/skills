# Rolling texts

With `texts`, each column rolls through a list of equal-length strings instead of digits; the last one is what stays on screen.

## Source

```vue
<script setup lang="ts">
const texts = ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee', 'fffff', 'hello']
const times = ['08:30', '11:45', '14:20', '17:05', '21:50']
</script>

<template>
  <am-flex vertical gap="middle" align="flex-start">
    <am-rolling-text :texts="texts" :duration="1" />
    <am-rolling-text :texts="times" direction="up" stop-order="rtl" />
  </am-flex>
</template>
```
