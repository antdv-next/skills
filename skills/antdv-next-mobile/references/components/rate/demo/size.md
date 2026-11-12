# Size and count

`size` provides three sizes, and `count` sets the total number of stars.

## Source

```vue
<template>
  <div class="demo-rate-list">
    <am-rate size="small" :default-value="3" />
    <am-rate :default-value="3" />
    <am-rate size="large" :default-value="3" />
    <am-rate :count="8" :default-value="6" />
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
