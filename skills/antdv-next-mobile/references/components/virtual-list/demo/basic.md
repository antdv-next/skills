# 10,000 fixed-height rows

Set `height` and `itemHeight`, and declare through `fixed` that every item has a fixed height, which is the cheapest mode. With 10,000 rows only a dozen or so nodes near the visible area are mounted, and `visibleChange` returns the currently rendered range.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const data = Array.from({ length: 10000 }, (_, index) => ({ id: index, name: `Item ${index + 1}` }))
const range = ref<[number, number]>([0, 0])

function onVisibleChange(start: number, end: number) {
  range.value = [start, end]
}
</script>

<template>
  <div class="demo-tip">
    {{ data.length }} rows, rendering {{ range[0] + 1 }} ~ {{ range[1] }}
  </div>
  <am-virtual-list
    :data="data"
    :height="320"
    :item-height="48"
    item-key="id"
    fixed
    class="demo-list"
    @visible-change="onVisibleChange"
  >
    <template #default="{ item }">
      <div class="demo-row">
        {{ item.name }}
      </div>
    </template>
  </am-virtual-list>
</template>

<style scoped>
.demo-tip {
  padding: 8px 16px;
  color: var(--am-color-text-tertiary);
  font-size: 13px;
}

.demo-list {
  background: var(--am-color-bg-container);
}

.demo-row {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 48px;
  padding: 0 16px;
  color: var(--am-color-text);
  font-size: 15px;
  border-bottom: 1px solid var(--am-color-split);
}
</style>
```
