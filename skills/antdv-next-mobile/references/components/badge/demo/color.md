# Color and offset

Set a preset or custom color with `color`, adjust the badge position with `offset`, and place a custom node in the `count` slot.

## Source

```vue
<script setup lang="ts">
import { ClockCircleFilled } from '@antdv-next/icons'
</script>

<template>
  <am-space size="large" wrap>
    <am-badge :count="5" color="blue">
      <div class="box" />
    </am-badge>
    <am-badge :count="5" color="#722ed1">
      <div class="box" />
    </am-badge>
    <am-badge :count="5" :offset="[-6, 6]">
      <div class="box" />
    </am-badge>
    <am-badge>
      <template #count>
        <ClockCircleFilled style="font-size: 16px" />
      </template>
      <div class="box" />
    </am-badge>
  </am-space>
</template>

<style scoped>
.box {
  width: 44px;
  height: 44px;
  background: var(--am-color-fill-secondary);
  border-radius: var(--am-border-radius);
}
</style>
```
