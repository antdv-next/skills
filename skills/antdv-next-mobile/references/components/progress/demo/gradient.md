# Gradient

`strokeColor` supports three gradient forms: `{ from, to }`, an object of percentage stops, and an array of colors.

## Source

```vue
<template>
  <am-flex vertical gap="middle">
    <am-progress :percent="99.9" :stroke-color="{ from: '#108ee9', to: '#87d068' }" />
    <am-progress :percent="70" status="active" :stroke-color="{ '0%': '#ffe58f', '50%': '#ffa940', '100%': '#f5222d' }" />
    <am-progress :percent="80" :stroke-color="['#13c2c2', '#1677ff', '#722ed1']" />
    <am-flex gap="middle" align="center">
      <am-progress type="circle" :percent="90" :size="96" :stroke-color="{ '0%': '#108ee9', '100%': '#87d068' }" />
      <am-progress type="dashboard" :percent="75" :size="96" :stroke-color="{ from: '#ffa940', to: '#f5222d' }" />
    </am-flex>
  </am-flex>
</template>
```
