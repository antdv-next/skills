# debug

## Description (zh-CN)

Debug 用例。

## Source

```vue
<script setup lang="ts">
import { h } from 'vue'

const zeroWidthEle = h('div')
</script>

<template>
  <a-flex vertical :gap="72" align="flex-start">
    <span />
    <a-tooltip
      open
      title="Thanks for using antd. Have a nice day !"
      :arrow="{ pointAtCenter: true }"
      placement="topLeft"
    >
      <a-button>Point at center</a-button>
    </a-tooltip>
    <a-tooltip open :title="zeroWidthEle" placement="topLeft">
      <a-button>Min Width</a-button>
    </a-tooltip>
    <a-tooltip open :title="zeroWidthEle" placement="top">
      <a-button>Min Width</a-button>
    </a-tooltip>
  </a-flex>
</template>
```
