# 禁用

## Description (zh-CN)

通过设置 `:title="null"` 或者 `title=""` 可以禁用 Tooltip。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const disabled = ref(true)

function toggleDisabled() {
  disabled.value = !disabled.value
}
</script>

<template>
  <a-tooltip :title="disabled ? null : 'prompt text'">
    <a-button @click="toggleDisabled">
      {{ disabled ? 'Enable' : 'Disable' }}
    </a-button>
  </a-tooltip>
</template>
```
