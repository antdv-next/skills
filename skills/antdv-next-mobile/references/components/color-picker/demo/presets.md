# Preset colors

`presets` provides collapsible groups of preset colors; tap a swatch to select it. A group with `defaultOpen: false` starts collapsed.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const color = ref('#1677ff')

const presets = [
  {
    label: 'Recommended',
    colors: ['#f5222d', '#fa8c16', '#fadb14', '#52c41a', '#13c2c2', '#1677ff', '#722ed1', '#eb2f96'],
  },
  {
    label: 'Translucent',
    colors: ['#1677ff80', '#52c41a80', '#fa8c1680', '#f5222d80', '#00000040', '#00000020'],
  },
  {
    label: 'Recent',
    colors: [],
    defaultOpen: false,
  },
]
</script>

<template>
  <am-color-picker v-model:value="color" value-format="hex" :presets="presets" show-text title="Theme color" />
</template>
```
