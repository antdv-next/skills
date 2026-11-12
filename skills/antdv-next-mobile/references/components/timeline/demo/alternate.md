# Alternate

`mode="alternate"` makes the content appear alternately on both sides of the timeline.

## Source

```vue
<script setup lang="ts">
import { ClockCircleOutlined } from '@antdv-next/icons'
import { h } from 'vue'

const items = [
  { content: 'Create a services site' },
  { content: 'Solve initial network problems', color: 'green' },
  { content: 'Testing failed, needs more checks', icon: () => h(ClockCircleOutlined) },
  { content: 'Network problems being solved', color: 'red' },
  { content: 'Fixed', title: '09-02' },
]
</script>

<template>
  <am-timeline mode="alternate" :items="items" />
</template>
```
