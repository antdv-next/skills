# 内联样式组合

## Description (zh-CN)

内联步骤条修改样式，通过 `offset` 进行对齐。

## Source

```vue
<script setup lang="ts">
import type { StepsProps } from 'antdv-next'
import { theme } from 'antdv-next'

const { token } = theme.useToken()

const items: StepsProps['items'] = Array.from({ length: 5 }, (_, index) => ({
  title: `Step ${index + 1}`,
  subTitle: 'Sub Title',
  content: `This is Step ${index + 1}`,
}))

const offsetItems = items.slice(2)
</script>

<template>
  <a-flex vertical>
    <a-steps type="inline" :current="1" :items="items" />
    <a-steps
      type="inline"
      :current="4"
      status="finish"
      :items="items"
      :styles="{
        itemTitle: { color: token.colorPrimaryText },
        itemSubtitle: { color: token.colorPrimaryTextActive },
        itemRail: { background: token.colorTextDisabled },
      }"
    />
    <a-steps type="inline" :current="1" :items="offsetItems" :offset="2" />
  </a-flex>
</template>
```
