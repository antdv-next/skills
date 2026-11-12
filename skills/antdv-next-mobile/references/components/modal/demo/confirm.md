# Confirmation dialog

Use `Modal.confirm()` to pop up a confirmation dialog quickly. `Modal.confirmAsync()` returns a Promise, which is convenient in `async` functions.

## Source

```vue
<script setup lang="ts">
import { message, Modal } from '@antdv-next/mobile'

function showConfirm() {
  Modal.confirm({
    title: 'Log out?',
    content: 'You will no longer receive new message notifications.',
    onOk() {
      message.success('Logged out')
    },
  })
}

function showDanger() {
  Modal.confirm({
    title: 'Delete this record?',
    content: 'This cannot be undone.',
    okText: 'Delete',
    okType: 'danger',
  })
}

async function showAsync() {
  const confirmed = await Modal.confirmAsync({ title: 'Save changes?', okText: 'Save', cancelText: 'Discard' })
  message.info(confirmed ? 'Saved' : 'Changes discarded')
}
</script>

<template>
  <am-flex vertical gap="small">
    <am-button block @click="showConfirm">
      Confirm
    </am-button>
    <am-button block danger @click="showDanger">
      Danger
    </am-button>
    <am-button block @click="showAsync">
      await Modal.confirmAsync()
    </am-button>
  </am-flex>
</template>
```
