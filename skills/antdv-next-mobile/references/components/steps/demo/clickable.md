# Clickable

With `v-model:current` (or a `change` listener), tapping a step switches to it; `disabled` steps are not clickable.

## Source

```vue
<script setup lang="ts">
import type { StepsItem } from '@antdv-next/mobile'
import { ref } from 'vue'

const items: StepsItem[] = [
  { title: 'Profile' },
  { title: 'Address' },
  { title: 'Payment' },
  { title: 'Confirm', disabled: true },
]

const current = ref(0)
</script>

<template>
  <am-steps v-model:current="current" :items="items" />
  <am-flex gap="small" style="margin-top: 24px">
    <am-button block :disabled="current === 0" @click="current--">
      Previous
    </am-button>
    <am-button block type="primary" :disabled="current === items.length - 1" @click="current++">
      Next
    </am-button>
  </am-flex>
</template>
```
