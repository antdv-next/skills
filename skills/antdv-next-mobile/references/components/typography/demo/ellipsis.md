# Ellipsis

`ellipsis` truncates to a single line by default; set the maximum number of rows to display through `rows`.

## Source

```vue
<script setup lang="ts">
const text = 'Enterprise products at Ant form a large and complex system. They are huge in scale and rich in features, and they change frequently, so design and development have to respond quickly. Such products also contain many similar pages and components, which can be abstracted into stable and highly reusable content.'
</script>

<template>
  <am-typography-title :level="5" ellipsis>
    A single-line truncated title: {{ text }}
  </am-typography-title>
  <am-typography-paragraph ellipsis>
    {{ text }}
  </am-typography-paragraph>
  <am-typography-paragraph :ellipsis="{ rows: 2 }">
    {{ text }}
  </am-typography-paragraph>
  <am-typography-paragraph :ellipsis="{ rows: 3 }" type="secondary">
    {{ text }}
  </am-typography-paragraph>
</template>
```
