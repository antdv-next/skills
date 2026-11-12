# Size and info position

`size` adjusts the thickness and width, `percentPosition` adjusts the position of the value, and `inner` shows the value inside the progress bar.

## Source

```vue
<template>
  <am-flex vertical gap="middle">
    <am-progress :percent="50" size="small" />
    <am-progress :percent="50" :size="16" />
    <am-progress :percent="50" :size="['60%', 12]" stroke-linecap="butt" />
    <am-progress :percent="60" :percent-position="{ align: 'start', type: 'outer' }" />
    <am-progress :percent="60" :percent-position="{ align: 'center', type: 'outer' }" />
    <am-progress :percent="60" :percent-position="{ align: 'end', type: 'inner' }" />
    <am-progress :percent="100" :percent-position="{ align: 'center', type: 'inner' }" :size="[300, 24]" />
  </am-flex>
</template>
```
