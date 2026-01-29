# 嵌套在 Tabs 中

## Description (zh-CN)

在 Tabs 组件中嵌套 Splitter。

## Source

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'

const items = [
  {
    key: '1',
    label: 'General',
    content: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Splitter Tab',
  },
]
const activeKey = shallowRef('1')
</script>

<template>
  <a-tabs v-model:active-key="activeKey" :items="items">
    <template #contentRender="{ index }">
      <template v-if="index === 1">
        <a-splitter style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
          <a-splitter-panel collapsible>
            <a-flex justify="center" align="center" style="height: 100%">
              <a-typography-title type="secondary" :level="5" style="white-space: nowrap">
                1
              </a-typography-title>
            </a-flex>
          </a-splitter-panel>
          <a-splitter-panel :collapsible="{ start: true }">
            <a-flex justify="center" align="center" style="height: 100%">
              <a-typography-title type="secondary" :level="5" style="white-space: nowrap">
                2
              </a-typography-title>
            </a-flex>
          </a-splitter-panel>
          <a-splitter-panel>
            <a-flex justify="center" align="center" style="height: 100%">
              <a-typography-title type="secondary" :level="5" style="white-space: nowrap">
                3
              </a-typography-title>
            </a-flex>
          </a-splitter-panel>
        </a-splitter>
      </template>
    </template>
  </a-tabs>
</template>
```
