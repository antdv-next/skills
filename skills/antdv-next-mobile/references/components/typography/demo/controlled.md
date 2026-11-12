# Controlled expansion

Control the expanded state through `ellipsis.expanded` and listen to the `expand` event.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const expanded = ref(false)
const rows = ref(2)
const text = 'Enterprise products at Ant form a large and complex system. They are huge in scale and rich in features, and they change frequently, so design and development have to respond quickly. Such products also contain many similar pages and components, which can be abstracted into stable and highly reusable content.'
</script>

<template>
  <am-flex vertical gap="middle">
    <am-flex gap="small" align="center" wrap>
      <am-button size="small" @click="expanded = !expanded">
        {{ expanded ? 'Collapse' : 'Expand' }}
      </am-button>
      <am-button size="small" @click="rows = rows === 2 ? 3 : 2">
        Show {{ rows }} rows
      </am-button>
    </am-flex>
    <am-typography-paragraph
      :ellipsis="{ rows, expandable: 'collapsible', expanded }"
      @expand="(value: boolean) => (expanded = value)"
    >
      {{ text }}
    </am-typography-paragraph>
  </am-flex>
</template>
```
