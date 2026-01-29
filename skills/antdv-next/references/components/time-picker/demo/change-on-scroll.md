# 滚动即改变

## Description (zh-CN)

通过 `changeOnScroll` 与 `needConfirm` 使其滚动时改变数值。

## Source

```vue
<script setup lang="ts">
function onChange(time: any, timeString: string) {
  console.log(time, timeString)
}
</script>

<template>
  <a-time-picker change-on-scroll :need-confirm="false" @change="onChange" />
</template>
```
