# Custom actions

Customize the action buttons with `actions`: up to 2 are laid out horizontally, more than 2 are stacked vertically. `Modal.show()` closes after an action is clicked by default.

## Source

```vue
<script setup lang="ts">
import type { ModalAction } from '@antdv-next/mobile'
import { message, Modal } from '@antdv-next/mobile'
import { ref } from 'vue'

const open = ref(false)

const actions: ModalAction[] = [
  { key: 'online', text: 'Pay online', bold: true },
  { key: 'offline', text: 'Cash on delivery' },
  { key: 'disabled', text: 'Ask a friend (unavailable)', disabled: true },
  { key: 'cancel', text: 'Cancel order', danger: true },
]

function onAction(action: ModalAction) {
  message.info(`Clicked: ${action.key}`)
}

function showStatic() {
  Modal.show({
    title: 'New version available',
    content: 'The new version runs smoother. Update now?',
    actions: [
      { key: 'later', text: 'Later' },
      { key: 'update', text: 'Update now', bold: true, onClick: () => message.success('Update started') },
    ],
  })
}
</script>

<template>
  <am-flex vertical gap="small">
    <am-button block @click="open = true">
      Vertical actions
    </am-button>
    <am-button block @click="showStatic">
      Modal.show()
    </am-button>
  </am-flex>
  <am-modal
    v-model:open="open"
    title="Payment method"
    :actions="actions"
    close-on-action
    @action="onAction"
  />
</template>
```
