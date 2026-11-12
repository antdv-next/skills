# Arrow and auto adjustment

Set `arrow` to `false` to hide the arrow. Near the screen edge the popover shifts along the edge to stay within the screen, and the arrow always points at the trigger element.

## Source

```vue
<template>
  <am-flex justify="space-between">
    <am-popover content="Near the left edge the popover shifts right so the content stays fully visible" placement="top">
      <am-button>Left</am-button>
    </am-popover>
    <am-popover content="No arrow here" :arrow="false">
      <am-button>No arrow</am-button>
    </am-popover>
    <am-popover content="Near the right edge the popover shifts left so the content stays fully visible" placement="top">
      <am-button>Right</am-button>
    </am-popover>
  </am-flex>
</template>
```
