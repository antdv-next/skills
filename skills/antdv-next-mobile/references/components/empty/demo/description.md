# Custom description

Customize the description with the `description` prop or the same-named slot. The description is hidden when it is set to `false`.

## Source

```vue
<template>
  <am-empty description="Your cart is empty" />
  <am-divider />
  <am-empty>
    <template #description>
      No results for <b class="keyword">"antdv"</b>
    </template>
  </am-empty>
  <am-divider />
  <am-empty :description="false" />
</template>

<style scoped>
.keyword {
  color: var(--am-color-primary);
  font-weight: normal;
}
</style>
```
