# Use hooks to get context

Static methods cannot read the `ConfigProvider` context of the call site. The `ContextHolder` created by `Modal.useModal()` is rendered in the component tree, so the modal follows the theme and locale of where it is placed.

## Source

```vue
<script setup lang="ts">
import { Modal } from '@antdv-next/mobile'
import enUS from '@antdv-next/mobile/locale/en_US'

const [modal, ContextHolder] = Modal.useModal()

function show() {
  modal.confirm({
    title: 'Dark & English',
    content: 'This dialog follows the theme and locale of its ConfigProvider.',
  })
}
</script>

<template>
  <am-config-provider :locale="enUS" :theme="{ algorithm: 'dark', token: { colorPrimary: '#00b96b' } }">
    <ContextHolder />
  </am-config-provider>
  <am-button block @click="show">
    Open with hooks
  </am-button>
</template>
```
