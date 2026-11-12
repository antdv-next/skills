# Basic

Simple display, with a thousands separator by default. `precision` controls the number of decimal places.

## Source

```vue
<template>
  <am-flex gap="large">
    <am-statistic title="Active Users" :value="112893" />
    <am-statistic title="Balance (CNY)" :value="112893.126" :precision="2" />
  </am-flex>
</template>
```
