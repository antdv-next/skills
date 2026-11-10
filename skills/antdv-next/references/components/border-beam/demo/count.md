# Multiple beams

## Description (en-US)

Use `count` to set the number of beams. `count` should be a positive integer, and multiple beams are evenly distributed around the container border. Use `items` to configure each beam's `color`, `lineWidth`, `outset`, and `size`; the array length determines the number of beams. When both `count` and `items` are provided, `items` takes precedence. Omitted item properties inherit the corresponding component props.

## Source

```vue
<script setup lang="ts">
const beamItems = [
  { color: '#1677ff', size: 48 },
  { color: '#52c41a', size: 72 },
]
</script>

<template>
  <a-flex vertical :gap="16">
    <a-border-beam :count="3">
      <a-card title="Multiple beams">
        Set count to distribute multiple beams evenly around the container border.
      </a-card>
    </a-border-beam>
    <a-border-beam :items="beamItems">
      <a-card title="Configured beams">
        Use items to customize the color and size of each beam.
      </a-card>
    </a-border-beam>
  </a-flex>
</template>
```
