# 两种大小

## Description (zh-CN)

`size="small"` 表示小号开关。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const checked1 = shallowRef(true)
const checked2 = shallowRef(true)
</script>

<template>
  <a-switch v-model:checked="checked1" />
  <br>
  <a-switch v-model:checked="checked2" size="small" />
</template>
```
