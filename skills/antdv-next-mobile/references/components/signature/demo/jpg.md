# Export jpg with a background

`type="jpg"` exports a jpg image and `quality` controls the compression. jpg has no alpha channel, so a white background is used by default; `backgroundColor` sets the background of the exported image. `clearText` / `confirmText` customize the button texts.

## Source

```vue
<script setup lang="ts">
import type { SignatureConfirmResult } from '@antdv-next/mobile'
import { ref } from 'vue'

const image = ref('')
const size = ref('')

function handleConfirm(result: SignatureConfirmResult) {
  image.value = result.image
  size.value = result.image ? `${Math.round(result.image.length * 0.75 / 1024)} KB` : ''
}
</script>

<template>
  <am-signature
    type="jpg"
    :quality="0.8"
    background-color="#fffbe6"
    pen-color="#000000"
    placeholder="Sign here"
    clear-text="Reset"
    confirm-text="Export JPG"
    class="paper"
    @confirm="handleConfirm"
    @clear="image = ''"
  />
  <template v-if="image">
    <img class="result" :src="image" alt="signature">
    <div class="size">
      image/jpeg · {{ size }}
    </div>
  </template>
</template>

<style scoped>
.paper {
  --am-signature-height: 160px;
  --am-signature-bg: #fffbe6;
  --am-signature-border-style: solid;
  --am-signature-placeholder-color: rgba(0, 0, 0, 0.25);
}

.result {
  display: block;
  width: 100%;
  margin-top: 12px;
  border-radius: var(--am-border-radius);
}

.size {
  margin-top: 4px;
  color: var(--am-color-text-description);
  font-size: 12px;
}
</style>
```
