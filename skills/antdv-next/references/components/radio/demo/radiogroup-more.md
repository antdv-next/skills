# Radio.Group 垂直

## Description (zh-CN)

垂直的 Radio.Group，配合更多输入框选项。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const val = shallowRef(1)
</script>

<template>
  <a-radio-group v-model:value="val" vertical>
    <a-radio :value="1">
      Option A
    </a-radio>
    <a-radio :value="2">
      Option B
    </a-radio>
    <a-radio :value="3">
      Option C
    </a-radio>
    <a-radio :value="4">
      More...
      <a-input v-if="val === 4" style="width: 100px; margin-left: 10px" />
    </a-radio>
  </a-radio-group>
</template>
```
