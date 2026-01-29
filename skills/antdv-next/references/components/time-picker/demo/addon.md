# 附加内容

## Description (zh-CN)

在 TimePicker 选择框底部显示自定义的内容。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

function handleOpenChange(val: boolean) {
  open.value = val
}

function handleClose() {
  open.value = false
}
</script>

<template>
  <a-time-picker
    :open="open"
    @open-change="handleOpenChange"
  >
    <template #renderExtraFooter>
      <a-button size="small" type="primary" @click="handleClose">
        OK
      </a-button>
    </template>
  </a-time-picker>
</template>
```
