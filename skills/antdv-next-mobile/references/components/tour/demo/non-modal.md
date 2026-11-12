# Non-modal and custom mask

Set `mask` to `false` for a non-modal tour: there is no mask and the page can still be scrolled and used, which goes well with `type="primary"`. A single step may also customize the mask by passing `{ color, style }` to `mask`; `disabledInteraction` blocks taps on the target inside the highlighted area.

## Source

```vue
<script setup lang="ts">
import type { TourStepItem } from '@antdv-next/mobile'
import { ref, shallowRef } from 'vue'

const ref1 = shallowRef()
const ref2 = shallowRef()
const ref3 = shallowRef()
const open = ref(false)
const count = ref(0)

const steps: TourStepItem[] = [
  { title: 'Still usable', description: 'No mask: try tapping the counter.', target: ref1 },
  {
    title: 'Custom mask',
    description: 'This step brings its own tinted mask.',
    target: ref2,
    type: 'default',
    mask: { color: 'rgb(22 119 255 / 35%)' },
  },
  { title: 'Done', description: 'Back to the non-modal style.', target: ref3, placement: 'top' },
]
</script>

<template>
  <am-button type="primary" @click="open = true">
    Begin non-modal Tour
  </am-button>
  <am-divider />
  <am-flex gap="small" wrap>
    <am-button ref="ref1" @click="count++">
      Count: {{ count }}
    </am-button>
    <am-button ref="ref2">
      Masked
    </am-button>
    <am-button ref="ref3">
      Last
    </am-button>
  </am-flex>
  <am-tour v-model:open="open" :steps="steps" :mask="false" type="primary" />
</template>
```
