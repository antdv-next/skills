# Information dialog

`Modal.info / success / error / warning` are used for information dialogs, with a single button and an icon shown above the title. `Modal.alert()` is a single-button alert without an icon, and the returned Promise settles after it is closed. The returned reference can be used to update or destroy the modal.

## Source

```vue
<script setup lang="ts">
import { Modal } from '@antdv-next/mobile'

function info() {
  Modal.info({ title: 'Notice', content: 'The system will be under maintenance at 23:00 tonight.' })
}

function success() {
  Modal.success({ title: 'Payment successful', content: 'Your order is placed. Watch for shipping updates.' })
}

function error() {
  Modal.error({ title: 'Submission failed', content: 'Network error. Please try again later.' })
}

function warning() {
  Modal.warning({ title: 'Insufficient balance', content: 'Your balance is not enough for this payment.' })
}

async function alert() {
  await Modal.alert({ title: 'Rules', content: 'Each user can join only once.' })
}

function countdown() {
  let seconds = 5
  const modal = Modal.success({ title: 'Success', content: `Closes in ${seconds}s` })
  const timer = setInterval(() => {
    seconds -= 1
    modal.update({ content: `Closes in ${seconds}s` })
    if (seconds <= 0) {
      clearInterval(timer)
      modal.destroy()
    }
  }, 1000)
}
</script>

<template>
  <am-flex gap="small" wrap>
    <am-button @click="info">
      Info
    </am-button>
    <am-button @click="success">
      Success
    </am-button>
    <am-button @click="error">
      Error
    </am-button>
    <am-button @click="warning">
      Warning
    </am-button>
    <am-button @click="alert">
      Alert
    </am-button>
    <am-button @click="countdown">
      Auto update and close
    </am-button>
  </am-flex>
</template>
```
