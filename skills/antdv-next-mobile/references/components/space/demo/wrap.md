# Wrap

With `wrap`, content wraps automatically when it exceeds one line; use `size` in the `[horizontal, vertical]` form to control the row gap.

## Source

```vue
<template>
  <am-space wrap :size="[8, 12]">
    <am-button v-for="i in 10" :key="i">
      Button {{ i }}
    </am-button>
  </am-space>
</template>
```
