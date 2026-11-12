# Complex combination

A more complex combination: with an avatar, and with the number and width of the paragraph rows adjusted through config objects.

## Source

```vue
<template>
  <am-flex vertical gap="large">
    <am-skeleton avatar :paragraph="{ rows: 3 }" />
    <am-skeleton
      :avatar="{ shape: 'square', size: 56 }"
      :title="{ width: '60%' }"
      :paragraph="{ rows: 2, width: ['100%', '40%'] }"
      round
    />
  </am-flex>
</template>
```
