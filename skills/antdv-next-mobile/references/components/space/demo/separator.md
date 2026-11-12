# Separator

Insert a separator between adjacent children with the `separator` prop or the same-named slot.

## Source

```vue
<template>
  <am-space vertical size="middle">
    <am-space separator="/">
      <a href="#">Home</a>
      <a href="#">Category</a>
      <a href="#">Detail</a>
    </am-space>
    <am-space>
      <template #separator>
        <am-divider vertical style="margin: 0" />
      </template>
      <a href="#">Edit</a>
      <a href="#">Share</a>
      <a href="#">Delete</a>
    </am-space>
  </am-space>
</template>

<style scoped>
a {
  color: var(--am-color-link);
  font-size: var(--am-font-size);
  text-decoration: none;
}
</style>
```
