# Vertical

Set `vertical` (or `orientation="vertical"`) for a vertical slider. The height is controlled by `--am-slider-vertical-height` or `style.height`.

## Source

```vue
<script setup lang="ts">
const marks = { 0: '0', 50: '50', 100: '100' }
</script>

<template>
  <div class="demo-slider-vertical">
    <am-slider vertical :default-value="30" />
    <am-slider vertical range :default-value="[20, 50]" :step="10" dots />
    <am-slider orientation="vertical" :default-value="50" :marks="marks" />
    <am-slider vertical reverse :default-value="30" style="height: 160px" />
  </div>
</template>

<style scoped>
.demo-slider-vertical {
  display: flex;
  gap: 32px;
  align-items: flex-start;
}
</style>
```
