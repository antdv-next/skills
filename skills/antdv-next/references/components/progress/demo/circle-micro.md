# Responsive circular progress bar

## Description (en-US)

Responsive circular progress bar. When `size` is smaller than 20, progress information will be displayed in Tooltip.

## Source

```vue
<template>
  <a-flex align="center" gap="small">
    <a-progress
      type="circle"
      rail-color="#e6f4ff"
      :percent="60"
      :stroke-width="20"
      :size="14"
      :format="number => `In progress, ${number}% complete`"
    />
    <span>Code release</span>
  </a-flex>
</template>
```
