# With icon

QR code with an icon. The icon covers a part of the code, so use a higher error level with it.

## Source

```vue
<template>
  <am-flex justify="center">
    <am-qrcode error-level="H" value="https://www.antdv-next.com" icon="/logo.svg" />
  </am-flex>
</template>
```
