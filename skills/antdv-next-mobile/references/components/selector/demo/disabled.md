# Disabled

`disabled` disables the whole component; you can also set `disabled` on an option to disable a single option.

## Source

```vue
<script setup lang="ts">
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3', disabled: true },
]
</script>

<template>
  <div class="demo-selector-list">
    <am-selector :options="options" :default-value="['1']" />
    <am-selector :options="options" :default-value="['1']" disabled />
  </div>
</template>

<style scoped>
.demo-selector-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
```
