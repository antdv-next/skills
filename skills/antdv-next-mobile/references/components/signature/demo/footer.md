# Custom actions

`:footer="false"` hides the built-in buttons so that you can drive the component with `clear()`, `confirm()` and `isEmpty()` through a ref. The `footer` slot replaces the footer, and the `start` / `end` events tell you when the user is writing.

## Source

```vue
<script setup lang="ts">
import type { SignatureExpose } from '@antdv-next/mobile'
import { message } from '@antdv-next/mobile'
import { ref } from 'vue'

const signatureRef = ref<SignatureExpose>()
const signed = ref(false)
const image = ref('')

function handleClear() {
  signatureRef.value?.clear()
  signed.value = false
  image.value = ''
}

function handleSubmit() {
  if (signatureRef.value?.isEmpty()) {
    message.warning('Please sign first')
    return
  }
  image.value = signatureRef.value?.confirm().image ?? ''
  message.success('Submitted')
}
</script>

<template>
  <am-signature ref="signatureRef" :footer="false" placeholder="Sign here" @end="signed = true" />
  <am-flex gap="small" class="actions">
    <am-button block :disabled="!signed" @click="handleClear">
      Rewrite
    </am-button>
    <am-button block type="primary" @click="handleSubmit">
      Submit
    </am-button>
  </am-flex>
  <img v-if="image" class="result" :src="image" alt="signature">
</template>

<style scoped>
.actions {
  margin-top: 12px;
}

.result {
  display: block;
  width: 100%;
  margin-top: 12px;
  border: 1px solid var(--am-color-border-secondary);
  border-radius: var(--am-border-radius);
}
</style>
```
