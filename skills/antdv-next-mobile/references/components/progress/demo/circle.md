# Circular progress bar

A circular progress bar, `size` sets the diameter.

## Source

```vue
<template>
  <am-flex gap="middle" align="center" wrap>
    <am-progress type="circle" :percent="75" :size="96" />
    <am-progress type="circle" :percent="70" status="exception" :size="96" />
    <am-progress type="circle" :percent="100" :size="96" />
    <am-progress type="circle" :percent="30" size="small" />
    <am-progress type="circle" :percent="60" :size="40" :show-info="false" />
  </am-flex>
</template>
```
