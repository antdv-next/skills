# 多彩文字提示

## Description (zh-CN)

我们添加了多种预设色彩的文字提示样式，用作不同场景使用。

## Source

```vue
<script setup lang="ts">
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
]
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9']
</script>

<template>
  <a-divider title-placement="start">
    Presets
  </a-divider>
  <a-space wrap>
    <template v-for="color in colors" :key="color">
      <a-tooltip :color="color" title="prompt text">
        <a-button>{{ color }}</a-button>
      </a-tooltip>
    </template>
  </a-space>
  <a-divider title-placement="start">
    Custom
  </a-divider>
  <a-space wrap>
    <template v-for="color in customColors" :key="color">
      <a-tooltip :color="color" title="prompt text">
        <a-button>{{ color }}</a-button>
      </a-tooltip>
    </template>
  </a-space>
</template>
```
