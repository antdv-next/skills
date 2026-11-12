# Gap

`gap` supports the `small`, `middle` and `large` presets, as well as a number (px) or any CSS length.

## Source

```vue
<template>
  <am-flex vertical gap="middle">
    <am-flex gap="small">
      <am-button>small</am-button>
      <am-button>8px</am-button>
    </am-flex>
    <am-flex gap="middle">
      <am-button>middle</am-button>
      <am-button>16px</am-button>
    </am-flex>
    <am-flex gap="large">
      <am-button>large</am-button>
      <am-button>24px</am-button>
    </am-flex>
    <am-flex :gap="4">
      <am-button>Number</am-button>
      <am-button>4</am-button>
    </am-flex>
    <am-flex gap="2em">
      <am-button>String</am-button>
      <am-button>2em</am-button>
    </am-flex>
  </am-flex>
</template>
```
