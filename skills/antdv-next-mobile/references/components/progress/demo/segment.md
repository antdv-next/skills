# Progress bar with success segment

`success` is used to show segmented progress, e.g. "done / in progress / not started".

## Source

```vue
<template>
  <am-flex vertical gap="middle">
    <am-progress :percent="60" :success="{ percent: 30 }" />
    <am-flex gap="middle" align="center">
      <am-progress type="circle" :percent="60" :success="{ percent: 30 }" :size="96" />
      <am-progress type="dashboard" :percent="60" :success="{ percent: 30 }" :size="96" />
    </am-flex>
  </am-flex>
</template>
```
