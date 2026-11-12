# Read only

Read only when `disabled`, unable to interact. Commonly used to display a rating result.

## Source

```vue
<template>
  <div class="demo-rate-list">
    <am-rate disabled :default-value="2" />
    <am-rate disabled allow-half :default-value="3.5" />
  </div>
</template>

<style scoped>
.demo-rate-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}
</style>
```
