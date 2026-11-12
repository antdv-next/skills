# Colors and speed

`color` and `shimmer-color` set the base and highlight colors, `duration` sets the time of one sweep (numbers are seconds).

## Source

```vue
<template>
  <am-flex vertical gap="middle">
    <am-shimmer-text color="#1677ff" shimmer-color="#bae0ff" content="Syncing 128 files" />
    <am-shimmer-text color="#d48806" shimmer-color="#ffe58f" :duration="1" content="Fast sweep, 1s" />
    <am-shimmer-text :duration="4" content="Slow sweep, 4s" />
  </am-flex>
</template>
```
