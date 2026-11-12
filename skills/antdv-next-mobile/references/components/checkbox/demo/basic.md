# Basic usage

The simplest usage. Bind the checked state with `v-model:checked`; the params of the `change` event are the same as on PC.

## Source

```vue
<script setup lang="ts">
import type { CheckboxChangeEvent } from '@antdv-next/mobile'
import { ref } from 'vue'

const checked = ref(true)

function onChange(e: CheckboxChangeEvent) {
  console.log('checked =', e.target.checked)
}
</script>

<template>
  <am-flex vertical gap="small">
    <am-checkbox v-model:checked="checked" @change="onChange">
      Checkbox
    </am-checkbox>
    <am-checkbox default-checked>
      Uncontrolled (defaultChecked)
    </am-checkbox>
  </am-flex>
</template>
```
