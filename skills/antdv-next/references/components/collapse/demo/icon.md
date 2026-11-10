# Panel Icon

## Description (en-US)

The panel header can carry an icon, rendered here through the `labelRender` slot. Icons
from third-party libraries render as a bare `<svg>` and stay vertically centred with the
title text just the same.

## Source

```vue
<script setup lang="ts">
import { SmileOutlined } from '@antdv-next/icons'
import { h } from 'vue'

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const items = [
  {
    key: '1',
    label: 'Panel with an Ant Design icon',
    content: h('p', text),
  },
  {
    key: '2',
    label: 'Panel with a third-party icon',
    content: h('p', text),
  },
]
</script>

<template>
  <a-collapse :items="items" :default-active-key="['1']">
    <template #labelRender="{ item }">
      <SmileOutlined v-if="item.key === '1'" />
      <!-- Icons from third-party libraries (e.g. lucide) render as a bare `<svg>`
           rather than an `.anticon` wrapper. It stays vertically centred with the
           title text. -->
      <svg
        v-else
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
      </svg>
      {{ item.label }}
    </template>
  </a-collapse>
</template>
```
