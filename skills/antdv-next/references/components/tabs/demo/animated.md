# animated

## Source

```vue
<script setup lang="ts">
import type { TabsProps } from 'antdv-next'
import { ref } from 'vue'

const inkBar = ref(true)
const tabPane = ref(true)

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Bamboo',
    content: 'Hello Bamboo!',
    style: {
      height: '200px',
      boxShadow: '0 0 3px rgba(255, 0, 0, 0.5)',
    },
  },
  {
    key: '2',
    label: 'Little',
    content: 'Hi Little!',
    style: {
      height: '300px',
      boxShadow: '0 0 3px rgba(0, 255, 0, 0.5)',
    },
  },
  {
    key: '3',
    label: 'Light',
    content: 'Welcome Light!',
    style: {
      height: '100px',
      boxShadow: '0 0 3px rgba(0, 0, 255, 0.5)',
    },
  },
]
</script>

<template>
  <div>
    <a-space>
      <a-switch
        v-model:checked="inkBar"
        checked-children="inkBar"
        un-checked-children="inkBar"
      />
      <a-switch
        v-model:checked="tabPane"
        checked-children="tabPane"
        un-checked-children="tabPane"
      />
    </a-space>

    <a-tabs :animated="{ inkBar, tabPane }" :items="items" />
  </div>
</template>
```
