# Size and alignment

`size` provides three list densities; `bordered` controls the hairlines above and below the list; for tall content, use `align="start"` to align the content on both sides to the top.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const size = ref<'small' | 'middle' | 'large'>('small')
function noop() {}
</script>

<template>
  <div style="padding: 12px 16px 0">
    <am-segmented v-model:value="size" block :options="['small', 'middle', 'large']" />
  </div>
  <am-list :size="size" :header="`size = ${size}`" :bordered="false">
    <am-list-item extra="Content" @click="noop">
      Item 1
    </am-list-item>
    <am-list-item extra="Content" @click="noop">
      Item 2
    </am-list-item>
    <am-list-item
      align="start"
      extra="Top aligned"
      description="With align set to start, both sides align with the first line of text instead of being vertically centered. Good for items with long descriptions."
      @click="noop"
    >
      <template #prefix>
        <span class="dot" />
      </template>
      Item 3
    </am-list-item>
  </am-list>
</template>

<style scoped>
.dot {
  width: 8px;
  height: 8px;
  margin-top: 8px;
  background: var(--am-color-primary);
  border-radius: 50%;
}
</style>
```
