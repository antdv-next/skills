# 滑动

## Description (zh-CN)

可以左右、上下滑动，容纳更多标签。

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

type TabPlacement = 'top' | 'left'

interface TabItem {
  key: string
  label: string
  content: string
  disabled?: boolean
}

const mode = ref<TabPlacement>('top')

const items: TabItem[] = Array.from({ length: 30 }, (_, i) => {
  const id = String(i)
  return {
    key: id,
    label: `Tab-${id}`,
    content: `Content of tab ${id}`,
    disabled: i === 28,
  }
})

const activeKey = ref('0')
</script>

<template>
  <div>
    <a-radio-group v-model:value="mode" style="margin-bottom: 8px;">
      <a-radio-button value="top">
        Horizontal
      </a-radio-button>
      <a-radio-button value="left">
        Vertical
      </a-radio-button>
    </a-radio-group>
    <a-tabs
      v-model:active-key="activeKey"
      :tab-placement="mode"
      style="height: 220px;"
      :items="items"
    />
  </div>
</template>
```
