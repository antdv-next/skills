# Custom color and render type

Customize the colors with `color` and `bgColor`. `type="svg"` renders a vector image, `bordered` removes the border and padding.

## Source

```vue
<template>
  <am-flex wrap gap="middle" justify="center">
    <am-qrcode value="https://www.antdv-next.com" :size="150" color="#1677ff" bg-color="#e6f4ff" />
    <am-qrcode value="https://www.antdv-next.com" :size="150" type="svg" color="#fff" bg-color="#52c41a" />
    <am-qrcode value="https://www.antdv-next.com" :size="126" :bordered="false" />
    <am-qrcode value="https://www.antdv-next.com" :size="126" :bordered="false" :margin-size="2" color="#000" bg-color="#fff" />
  </am-flex>
</template>
```
