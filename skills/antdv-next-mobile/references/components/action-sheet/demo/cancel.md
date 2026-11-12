# Cancel button and title

`title` and `extra` set the title and description of the header. The text of the cancel button comes from the locale by default and can be changed with `cancelText`; set it to `null` to hide the button.

## Source

```vue
<script setup lang="ts">
import type { ActionSheetAction } from '@antdv-next/mobile'
import { ref } from 'vue'

const withTitle = ref(false)
const noCancel = ref(false)
const actions: ActionSheetAction[] = [
  { key: 'camera', text: 'Take photo' },
  { key: 'album', text: 'Choose from album' },
]
</script>

<template>
  <am-flex vertical gap="small">
    <am-button block @click="withTitle = true">
      Title and description
    </am-button>
    <am-button block @click="noCancel = true">
      No cancel button
    </am-button>
  </am-flex>
  <am-action-sheet
    v-model:open="withTitle"
    :actions="actions"
    title="Change avatar"
    extra="JPG or PNG, up to 5MB"
    cancel-text="Not now"
  />
  <am-action-sheet v-model:open="noCancel" :actions="actions" :cancel-text="null" />
</template>
```
