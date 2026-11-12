# Basic usage

Basic tags. A tag can be rendered as a link with `href`, or made closable with `closable`.

## Source

```vue
<template>
  <am-space wrap>
    <am-tag>Tag</am-tag>
    <am-tag href="https://github.com/antdv-next" target="_blank">
      Link
    </am-tag>
    <am-tag closable>
      Closable
    </am-tag>
    <am-tag disabled>
      Disabled
    </am-tag>
  </am-space>
</template>
```
