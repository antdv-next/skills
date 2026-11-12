# Text and decorations

Built-in text styles: semantic types, disabled, mark, code, keyboard, underline, delete, strong and italic.

## Source

```vue
<template>
  <am-flex vertical gap="small">
    <am-typography-text>Antdv Next (default)</am-typography-text>
    <am-typography-text type="secondary">
      Antdv Next (secondary)
    </am-typography-text>
    <am-typography-text type="success">
      Antdv Next (success)
    </am-typography-text>
    <am-typography-text type="warning">
      Antdv Next (warning)
    </am-typography-text>
    <am-typography-text type="danger">
      Antdv Next (danger)
    </am-typography-text>
    <am-typography-text disabled>
      Antdv Next (disabled)
    </am-typography-text>
    <am-typography-text mark>
      Antdv Next (mark)
    </am-typography-text>
    <am-typography-text code>
      Antdv Next (code)
    </am-typography-text>
    <am-typography-text keyboard>
      Antdv Next (keyboard)
    </am-typography-text>
    <am-typography-text underline>
      Antdv Next (underline)
    </am-typography-text>
    <am-typography-text delete>
      Antdv Next (delete)
    </am-typography-text>
    <am-typography-text strong>
      Antdv Next (strong)
    </am-typography-text>
    <am-typography-text italic>
      Antdv Next (italic)
    </am-typography-text>
    <am-typography-text strong underline type="danger">
      Combined (strong + underline + danger)
    </am-typography-text>
  </am-flex>
</template>
```
