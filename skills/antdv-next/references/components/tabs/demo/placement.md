# 位置

## Description (zh-CN)

有四个位置，`tabPlacement="start|end|top|bottom"`。在移动端下，`start|end` 会自动切换成 `top`。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

type TabPlacement = 'top' | 'bottom' | 'start' | 'end'

interface TabItem {
  key: string
  label: string
  content: string
}

const tabPlacement = ref<TabPlacement>('start')

const items: TabItem[] = Array.from({ length: 3 }).map((_, i) => {
  const id = String(i + 1)
  return {
    key: id,
    label: `Tab ${id}`,
    content: `Content of Tab ${id}`,
  }
})
</script>

<template>
  <a-space style="margin-bottom: 24px;">
    Tab placement:
    <a-radio-group v-model:value="tabPlacement">
      <a-radio-button value="top">
        top
      </a-radio-button>
      <a-radio-button value="bottom">
        bottom
      </a-radio-button>
      <a-radio-button value="start">
        start
      </a-radio-button>
      <a-radio-button value="end">
        end
      </a-radio-button>
    </a-radio-group>
  </a-space>
  <a-tabs :tab-placement="tabPlacement" :items="items" />
</template>
```
