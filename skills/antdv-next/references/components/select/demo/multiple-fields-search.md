# Multiple fields search

## Description (en-US)

Multiple fields search with `optionFilterProp` as array.

## Source

```vue
<script setup lang="ts">
const options = [
  { value: 'a11', label: 'a11', otherField: 'c11' },
  { value: 'b22', label: 'b22', otherField: 'b11' },
  { value: 'c33', label: 'c33', otherField: 'b33' },
  { value: 'd44', label: 'd44', otherField: 'd44' },
]
</script>

<template>
  <a-select
    placeholder="Select an option"
    show-search
    :option-filter-prop="['label', 'otherField']"
    :options="options"
  />
</template>
```
