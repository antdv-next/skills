# Download QRCode

Get the image through `toDataURL()` of the component instance to save or share it. `canvas` returns a PNG, `svg` an SVG image.

## Source

```vue
<script setup lang="ts">
import type { QRCodeRef } from '@antdv-next/mobile'
import { ref } from 'vue'

const type = ref<'canvas' | 'svg'>('canvas')
const qrcode = ref<QRCodeRef>()

function download() {
  const url = qrcode.value?.toDataURL()
  if (!url)
    return
  const a = document.createElement('a')
  a.download = type.value === 'canvas' ? 'QRCode.png' : 'QRCode.svg'
  a.href = url
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
</script>

<template>
  <am-flex vertical align="center" gap="middle">
    <am-segmented v-model:value="type" :options="['canvas', 'svg']" />
    <am-qrcode ref="qrcode" :type="type" value="https://www.antdv-next.com" color="#000" bg-color="#fff" />
    <am-button type="primary" @click="download">
      Download
    </am-button>
  </am-flex>
</template>
```
