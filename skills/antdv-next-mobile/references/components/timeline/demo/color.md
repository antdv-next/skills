# Color and variant

Color of the circles: green means completed or success status, red means warning or error, blue means ongoing or other default status, and gray means unfinished or disabled status; any color value can be passed as well. `variant="filled"` gives solid dots.

## Source

```vue
<script setup lang="ts">
const items = [
  { color: 'green', content: 'Create a services site 2026-09-01' },
  { color: 'red', content: 'Network problems solved, server room fault found' },
  { content: 'Testing failed 2026-09-01' },
  { color: 'gray', content: 'Network problems being solved 2026-09-01' },
  { color: '#00ccff', content: 'Custom color #00ccff' },
]
</script>

<template>
  <am-flex gap="large">
    <am-timeline :items="items" style="flex: 1" />
    <am-timeline :items="items" variant="filled" style="flex: 1" />
  </am-flex>
</template>
```
