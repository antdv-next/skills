# Change on select

With `changeOnSelect` enabled you can stop at a parent level: the popup shows an "OK" button that commits the current path when tapped.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { regions } from './data'

const value = ref<string[]>(['zhejiang'])
</script>

<template>
  <am-cascader v-model:value="value" :options="regions" change-on-select title="Delivery area" />
</template>
```
