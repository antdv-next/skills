# 自定义子组件

## Description (zh-CN)

与自定义组件一起使用.

## Source

```vue
<script setup lang="ts">
import { defineComponent, h } from 'vue'

const ComponentWithEvents = defineComponent({
  name: 'ComponentWithEvents',
  inheritAttrs: false,
  setup(_, { attrs }) {
    return () => h('span', { ...attrs }, 'This text is inside a component with the necessary events exposed.')
  },
})
</script>

<template>
  <a-tooltip title="prompt text">
    <ComponentWithEvents />
  </a-tooltip>
</template>
```
