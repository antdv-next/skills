# Basic usage

The most basic usage: configure `target`, `title` and `description` of every step through `steps` and control the visibility with `v-model:open`. A target outside of the screen is scrolled into view first; the cover is set through `cover` or the `coverRender` slot.

## Source

```vue
<script setup lang="ts">
import type { TourStepItem } from '@antdv-next/mobile'
import { EllipsisOutlined } from '@antdv-next/icons'
import { shallowRef } from 'vue'

const ref1 = shallowRef()
const ref2 = shallowRef()
const ref3 = shallowRef()
const open = shallowRef(false)

const steps: TourStepItem[] = [
  { title: 'Upload File', description: 'Put your files here.', target: ref1 },
  { title: 'Save', description: 'Save your changes.', target: ref2 },
  { title: 'Other Actions', description: 'Tap to see other actions.', target: ref3 },
]
</script>

<template>
  <am-button type="primary" @click="open = true">
    Begin Tour
  </am-button>
  <am-divider />
  <am-flex gap="small">
    <am-button ref="ref1">
      Upload
    </am-button>
    <am-button ref="ref2" type="primary">
      Save
    </am-button>
    <am-button ref="ref3">
      <template #icon>
        <EllipsisOutlined />
      </template>
    </am-button>
  </am-flex>
  <am-tour v-model:open="open" :steps="steps">
    <template #coverRender="{ index }">
      <img
        v-if="index === 0"
        draggable="false"
        alt="tour.png"
        src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
      >
    </template>
  </am-tour>
</template>
```
