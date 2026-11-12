# Custom size

`size` is a number (px) or any CSS length: `100%` makes the QR code as wide as its container while staying square.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const size = ref(160)
const full = ref(false)
</script>

<template>
  <am-flex vertical align="center" gap="middle">
    <am-flex gap="small">
      <am-button size="small" :disabled="full || size <= 80" @click="size -= 20">
        Smaller
      </am-button>
      <am-button size="small" :disabled="full || size >= 300" @click="size += 20">
        Larger
      </am-button>
      <am-button size="small" :type="full ? 'primary' : 'default'" @click="full = !full">
        100%
      </am-button>
    </am-flex>
    <am-qrcode
      error-level="H"
      :size="full ? '100%' : size"
      :icon-size="full ? 64 : size / 4"
      value="https://www.antdv-next.com"
      icon="/logo.svg"
    />
  </am-flex>
</template>
```
