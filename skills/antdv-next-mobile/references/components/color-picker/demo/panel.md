# Inline panel ColorPickerPanel

`ColorPickerPanel` (i.e. `ColorPicker.Panel`) is the panel without the trigger and the popup. It can be embedded directly in the page and its value updates in real time while dragging. The `panelRender` slot rearranges the panel content.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const color = ref('#1677ff')
const presets = [
  { label: 'Presets', colors: ['#f5222d', '#fa8c16', '#fadb14', '#52c41a', '#1677ff', '#722ed1'] },
]
</script>

<template>
  <am-color-picker-panel v-model:value="color" value-format="hex" :presets="presets" allow-clear>
    <template #panelRender="{ panel }">
      <div class="demo-preview" :style="{ background: color }">
        {{ color }}
      </div>
      <component :is="panel" />
    </template>
  </am-color-picker-panel>
</template>

<style scoped>
.demo-preview {
  margin-bottom: 12px;
  padding: 12px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  text-shadow: 0 1px 2px rgb(0 0 0 / 40%);
  border-radius: 8px;
}
</style>
```
