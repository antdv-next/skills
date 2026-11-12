# Colorful tags

There are 13 built-in preset colors, and any CSS color value can also be passed; the background and border are derived from the main color automatically.

## Source

```vue
<script setup lang="ts">
const presets = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple']
const customs = ['#f50', '#2db7f5', '#87d068', '#108ee9']
</script>

<template>
  <am-space vertical size="middle">
    <am-space wrap>
      <am-tag v-for="color in presets" :key="color" :color="color">
        {{ color }}
      </am-tag>
    </am-space>
    <am-space wrap>
      <am-tag v-for="color in customs" :key="color" :color="color">
        {{ color }}
      </am-tag>
    </am-space>
    <am-space wrap>
      <am-tag v-for="color in customs" :key="color" :color="color" variant="solid">
        {{ color }}
      </am-tag>
    </am-space>
  </am-space>
</template>
```
