# 自定义页签头

## Description (zh-CN)

使用 `renderTabBar` 配合吸顶容器实现固定页签头。

## Source

```vue
<script setup lang="ts">
import { theme } from 'antdv-next'
import { ref } from 'vue'

interface TabItem {
  key: string
  label: string
  content: string
  style?: Record<string, any>
}

const items: TabItem[] = Array.from({ length: 3 }).map((_, i) => {
  const id = String(i + 1)
  return {
    key: id,
    label: `Tab ${id}`,
    content: `Content of Tab Pane ${id}`,
    style: i === 0 ? { height: '200px' } : undefined,
  }
})

const { token } = theme.useToken()
const activeKey = ref('1')
</script>

<template>
  <a-tabs v-model:active-key="activeKey" :items="items">
    <template #renderTabBar="{ TabNavListComponent, props }">
      <div
        style="position: sticky; top: 64px; z-index: 1;"
        :style="{ background: token.colorBgContainer }"
      >
        <component :is="TabNavListComponent" v-bind="props" />
      </div>
    </template>
  </a-tabs>
</template>
```
