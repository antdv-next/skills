# Custom rendering

`itemRender` customizes the content of the page items, previous and next; the `prevIcon` / `nextIcon` slots only replace the icons on both sides; component tokens adjust the appearance.

## Source

```vue
<script setup lang="ts">
import type { PaginationProps } from '@antdv-next/mobile'
import { CaretRightOutlined } from '@antdv-next/icons'

const itemRender: PaginationProps['itemRender'] = (_page, type, element) => {
  if (type === 'prev')
    return 'Prev'
  if (type === 'next')
    return 'Next'
  return element
}
</script>

<template>
  <am-flex vertical gap="large">
    <am-pagination class="text-pager" :total="40" :item-render="itemRender" />
    <am-pagination class="round-pager" :total="120" :default-current="6" show-less-items>
      <template #prevIcon>
        <CaretRightOutlined style="transform: rotate(180deg)" />
      </template>
      <template #nextIcon>
        <CaretRightOutlined />
      </template>
    </am-pagination>
  </am-flex>
</template>

<style scoped>
.text-pager :deep(.am-pagination-prev),
.text-pager :deep(.am-pagination-next) {
  flex: none;
  padding: 0 8px;
}

.round-pager {
  --am-pagination-item-size: 36px;
  --am-pagination-item-border-radius: 50%;
  --am-pagination-item-background: var(--am-color-fill-tertiary);
  --am-pagination-item-gap: 8px;
}
</style>
```
