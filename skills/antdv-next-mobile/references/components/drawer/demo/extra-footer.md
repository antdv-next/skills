# Extra actions and footer

Place extra actions in the header through `extra`, and set the footer through `footer`. Both support a prop and a same-named slot.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <am-button block @click="open = true">
    Extra and footer
  </am-button>
  <am-drawer v-model:open="open" title="Filters" :closable="false">
    <template #extra>
      <am-button type="link" @click="open = false">
        Reset
      </am-button>
    </template>
    <p>Price range</p>
    <p>Brand</p>
    <p>Ships from</p>
    <template #footer>
      <am-flex gap="small">
        <am-button block @click="open = false">
          Cancel
        </am-button>
        <am-button type="primary" block @click="open = false">
          OK
        </am-button>
      </am-flex>
    </template>
  </am-drawer>
</template>
```
