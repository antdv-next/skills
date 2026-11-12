# Basic usage

A basic card with a title, an action at the top right and content. `size="small"` gives a more compact card.

## Source

```vue
<template>
  <am-space vertical block size="middle">
    <am-card title="Default card">
      <template #extra>
        <a href="#">More</a>
      </template>
      <p>Card content</p>
      <p>Card content</p>
    </am-card>
    <am-card title="Small card" extra="2 items" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </am-card>
    <am-card>
      Card with content only
    </am-card>
  </am-space>
</template>

<style scoped>
p {
  margin: 0;
}

p + p {
  margin-top: 4px;
}

a {
  color: var(--am-color-link);
  text-decoration: none;
}
</style>
```
