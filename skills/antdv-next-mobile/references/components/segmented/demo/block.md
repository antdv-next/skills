# Full width

`block` makes the segmented control fit the width of its parent, with options sharing the width equally. This is the most common form on mobile.

## Source

```vue
<template>
  <am-flex vertical gap="middle">
    <am-segmented block :options="['All', 'Unread', 'Read']" />
    <am-segmented block :options="['For you', 'Following', 'Hot', 'Nearby']" default-value="Hot" />
  </am-flex>
</template>
```
