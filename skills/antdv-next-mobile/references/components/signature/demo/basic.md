# Basic usage

Write on the canvas with a finger (or the mouse). Tap "Confirm" to get the data URL of the image from the `confirm` event; `image` is an empty string when nothing was drawn.

## Source

```vue
<script setup lang="ts">
import type { SignatureConfirmResult } from '@antdv-next/mobile'
import { message } from '@antdv-next/mobile'
import { ref } from 'vue'

const image = ref('')

function handleConfirm(result: SignatureConfirmResult) {
  image.value = result.image
  if (!result.image)
    message.warning('Please sign first')
}
</script>

<template>
  <am-signature placeholder="Sign here" @confirm="handleConfirm" @clear="image = ''" />
  <img v-if="image" class="result" :src="image" alt="signature">
</template>

<style scoped>
.result {
  display: block;
  width: 100%;
  margin-top: 12px;
  border: 1px solid var(--am-color-border-secondary);
  border-radius: var(--am-border-radius);
}
</style>
```
