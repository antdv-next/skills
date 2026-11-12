# Progress bar

A standard progress bar, with the in-progress, active, exception and success states.

## Source

```vue
<template>
  <am-flex vertical gap="middle">
    <am-progress :percent="30" />
    <am-progress :percent="50" status="active" />
    <am-progress :percent="70" status="exception" />
    <am-progress :percent="100" />
    <am-progress :percent="50" :show-info="false" />
  </am-flex>
</template>
```
