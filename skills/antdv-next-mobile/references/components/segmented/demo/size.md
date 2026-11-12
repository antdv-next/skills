# Size and shape

`size` provides small, middle and large sizes, and `shape="round"` uses a pill shape.

## Source

```vue
<script setup lang="ts">
const options = ['List', 'Board', 'Calendar']
</script>

<template>
  <am-flex vertical gap="middle" align="flex-start">
    <am-segmented size="small" :options="options" />
    <am-segmented :options="options" />
    <am-segmented size="large" :options="options" />
    <am-segmented shape="round" :options="options" />
    <am-segmented shape="round" size="large" block :options="options" />
  </am-flex>
</template>
```
