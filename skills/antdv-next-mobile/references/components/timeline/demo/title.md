# Title

With `title` set, the title is shown on the other side of the timeline, and `titleSpan` adjusts the width of the title column.

## Source

```vue
<script setup lang="ts">
const items = [
  { title: '09-01 09:12', content: 'Create a services site' },
  { title: '09-01 11:30', content: 'Solve initial network problems' },
  { title: '09-02 08:05', content: 'Testing failed' },
  { content: 'Node without a title' },
]
</script>

<template>
  <am-timeline :items="items" title-span="88px" />
</template>
```
