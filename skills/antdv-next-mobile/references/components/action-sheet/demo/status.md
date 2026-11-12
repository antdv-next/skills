# Action status

Actions support a `description`, an `icon`, and the `danger`, `bold` and `disabled` states.

## Source

```vue
<script setup lang="ts">
import type { ActionSheetAction } from '@antdv-next/mobile'
import { DeleteOutlined, EditOutlined, ShareAltOutlined } from '@antdv-next/icons'
import { h, ref } from 'vue'

const open = ref(false)
const actions: ActionSheetAction[] = [
  { key: 'share', text: 'Share', icon: () => h(ShareAltOutlined), bold: true },
  { key: 'edit', text: 'Edit', icon: () => h(EditOutlined), description: 'Needs review again after editing' },
  { key: 'top', text: 'Pin', disabled: true, description: 'Pin limit reached' },
  { key: 'delete', text: 'Delete', icon: () => h(DeleteOutlined), danger: true, description: 'Cannot be undone' },
]
</script>

<template>
  <am-button block @click="open = true">
    Action states
  </am-button>
  <am-action-sheet v-model:open="open" :actions="actions" />
</template>
```
