# Duration

`duration` is the time one loop takes, in seconds. `6` by default.

## Source

```vue
<script setup lang="ts">
const durations = [
  { name: 'Fast', seconds: 3, description: 'A quick loop for temporary highlights.' },
  { name: 'Default', seconds: 6, description: 'The pacing for most emphasized containers.' },
  { name: 'Slow', seconds: 12, description: 'A calmer loop for persistent panels.' },
]
</script>

<template>
  <am-flex vertical gap="middle">
    <am-border-beam v-for="item in durations" :key="item.seconds" :duration="item.seconds">
      <am-card :title="item.name" :extra="`${item.seconds}s`" size="small">
        {{ item.description }}
      </am-card>
    </am-border-beam>
  </am-flex>
</template>
```
