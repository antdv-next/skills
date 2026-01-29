# auto-complete-and-select

## Description (zh-CN)

debug demo

## Source

```vue
<script setup lang="ts">
const sizes = ['small', 'middle', 'large'] as const
</script>

<template>
  <a-flex vertical gap="middle">
    <a-flex v-for="size in sizes" :key="size" gap="small">
      <a-select
        value="centered"
        :options="[{ value: 'centered' }]"
        :size="size"
        style="width: 200px"
      />
      <a-auto-complete value="centered" :size="size" style="width: 200px" />
    </a-flex>
  </a-flex>
</template>
```
