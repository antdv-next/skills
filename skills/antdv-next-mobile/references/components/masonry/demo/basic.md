# Basic

Pass the data through `items` and render it with the `itemRender` slot. Every item goes to the currently shortest column; two columns by default.

## Source

```vue
<script setup lang="ts">
const items = [120, 60, 90, 70, 110, 150, 80, 60, 100, 130].map((height, index) => ({
  key: `item-${index}`,
  data: height,
}))
</script>

<template>
  <am-masonry :items="items" :gutter="12">
    <template #itemRender="{ data, index }">
      <div class="block" :style="{ height: `${data}px` }">
        {{ index + 1 }}
      </div>
    </template>
  </am-masonry>
</template>

<style scoped>
.block {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--am-color-primary);
  font-weight: 600;
  background: var(--am-color-primary-bg);
  border: 1px solid var(--am-color-primary-border);
  border-radius: var(--am-border-radius);
}
</style>
```
