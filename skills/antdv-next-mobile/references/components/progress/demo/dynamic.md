# Dynamic

A dynamic progress bar is better.

## Source

```vue
<script setup lang="ts">
import { MinusOutlined, PlusOutlined } from '@antdv-next/icons'
import { ref } from 'vue'

const percent = ref(30)

function change(delta: number) {
  percent.value = Math.min(Math.max(percent.value + delta, 0), 100)
}
</script>

<template>
  <am-flex vertical gap="middle" align="center">
    <am-progress :percent="percent" />
    <am-progress type="circle" :percent="percent" />
    <am-flex gap="small">
      <am-button @click="change(-10)">
        <template #icon>
          <MinusOutlined />
        </template>
      </am-button>
      <am-button @click="change(10)">
        <template #icon>
          <PlusOutlined />
        </template>
      </am-button>
    </am-flex>
  </am-flex>
</template>
```
