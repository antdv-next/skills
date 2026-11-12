# Basic usage

The most basic list: `header` sets the group title, the default slot of each `<am-list-item>` is the main content, and `extra` shows the value on the right.

## Source

```vue
<template>
  <am-list header="Basic">
    <am-list-item>Single line</am-list-item>
    <am-list-item extra="Content">
      With extra
    </am-list-item>
    <am-list-item title="Using the title prop" extra="Content" />
  </am-list>
</template>
```
