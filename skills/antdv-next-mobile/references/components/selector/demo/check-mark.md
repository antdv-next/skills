# Hide the check mark

Set `showCheckMark` to `false` to hide the check mark at the bottom right corner of selected items.

## Source

```vue
<script setup lang="ts">
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]
</script>

<template>
  <am-selector :options="options" :default-value="['1', '2']" :show-check-mark="false" multiple />
</template>
```
