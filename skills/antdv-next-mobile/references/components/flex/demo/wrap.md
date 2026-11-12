# Wrap

With `wrap` set, the content wraps automatically when it exceeds one line.

## Source

```vue
<template>
  <am-flex wrap gap="small">
    <am-button v-for="i in 9" :key="i" type="primary" variant="filled" color="primary">
      Button {{ i }}
    </am-button>
  </am-flex>
</template>
```
