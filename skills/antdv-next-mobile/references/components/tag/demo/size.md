# Size and rounded corners

Mobile only: `size` offers three sizes, and `round` gives a pill-shaped tag.

## Source

```vue
<template>
  <am-space vertical size="middle">
    <am-space align="center" wrap>
      <am-tag color="blue" size="small">
        small
      </am-tag>
      <am-tag color="blue">
        middle
      </am-tag>
      <am-tag color="blue" size="large">
        large
      </am-tag>
    </am-space>
    <am-space align="center" wrap>
      <am-tag color="red" variant="solid" size="small" round>
        Hot
      </am-tag>
      <am-tag color="orange" variant="outlined" round>
        30 off 200
      </am-tag>
      <am-tag color="green" size="large" round>
        Free shipping
      </am-tag>
    </am-space>
  </am-space>
</template>
```
