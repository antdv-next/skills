# Divider with text

A divider can contain text; set its position with `titlePlacement`. When `plain` is `false`, the text is displayed in heading style.

## Source

```vue
<template>
  <am-divider>Center text</am-divider>
  <am-divider title-placement="start">
    Left text
  </am-divider>
  <am-divider title-placement="end">
    Right text
  </am-divider>
  <am-divider :plain="false">
    Heading style
  </am-divider>
</template>
```
