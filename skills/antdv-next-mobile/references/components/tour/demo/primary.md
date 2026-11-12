# Primary type and highlighted area

`type="primary"` uses the primary color as background for a more prominent hint. Set it for the whole tour or through `type` of a single step. `gap` controls the space and the corner radius of the highlighted area, and `arrow` set to `false` hides the arrow.

## Source

```vue
<script setup lang="ts">
import type { TourStepItem } from '@antdv-next/mobile'
import { ref, shallowRef } from 'vue'

const ref1 = shallowRef()
const ref2 = shallowRef()
const open = ref(false)

const steps: TourStepItem[] = [
  { title: 'New feature', description: 'Scan a code to pay in seconds.', target: ref1 },
  { title: 'Default style', description: 'This step uses the default type, without arrow.', target: ref2, type: 'default', arrow: false },
]
</script>

<template>
  <am-button type="primary" @click="open = true">
    Begin Tour
  </am-button>
  <am-divider />
  <am-flex justify="space-between">
    <am-button ref="ref1" shape="round">
      Scan
    </am-button>
    <am-button ref="ref2" shape="round">
      Wallet
    </am-button>
  </am-flex>
  <am-tour v-model:open="open" :steps="steps" type="primary" :gap="{ offset: 8, radius: 24 }" />
</template>
```
