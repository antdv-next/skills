# Progress bar with steps

A progress bar with steps. Pass an array to `strokeColor` to set a color for each step.

## Source

```vue
<template>
  <am-flex vertical gap="middle" align="flex-start">
    <am-progress :percent="50" :steps="3" />
    <am-progress :percent="30" :steps="5" />
    <am-progress :percent="100" :steps="5" size="small" stroke-color="#52c41a" />
    <am-progress :percent="60" :steps="5" :size="[28, 10]" :stroke-color="['#52c41a', '#52c41a', '#faad14']" />
    <am-progress :percent="75" :steps="{ count: 8, gap: 6 }" :size="[20, 20]" stroke-linecap="butt" :show-info="false" />
  </am-flex>
</template>
```
