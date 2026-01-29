# 基本

## Description (zh-CN)

最简单的用法。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const checked = shallowRef(true)

function onChange(checked: boolean) {
  console.log(`switch to ${checked}`)
}
</script>

<template>
  <a-switch v-model:checked="checked" @change="onChange" />
</template>
```
